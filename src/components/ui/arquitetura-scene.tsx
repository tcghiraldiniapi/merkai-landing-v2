"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

// Blue palette
const BLUE = new THREE.Color(0x3b82f6)
const BLUE_BRIGHT = new THREE.Color(0x60a5fa)
const BLUE_DIM = new THREE.Color(0x1e3a5f)
const LINE_COLOR = new THREE.Color(0x475569)

interface FlowNode {
  pos: THREE.Vector3
  label: string
  mesh: THREE.Mesh | null
}

interface FlowEdge {
  from: number
  to: number
  particles: THREE.Mesh[]
}

function createLabelTexture(text: string): THREE.Texture {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 128
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, 512, 128)
  ctx.font = "bold 38px system-ui, -apple-system, sans-serif"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillStyle = "#e2e8f0"
  ctx.fillText(text, 256, 64)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

export function ArquiteturaScene({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const container = canvas.parentElement
    const w = container?.clientWidth ?? 500
    const h = container?.clientHeight ?? 400

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100)
    camera.position.set(0, 0, 8)

    // DAG layout — scaled up significantly
    const nodePositions: [number, number, string][] = [
      [-3.2, 1.5, "Lead"],
      [-3.2, -1.5, "Visitante"],
      [-0.3, 0, "Qualificação"],
      [2.2, 1.5, "CRM"],
      [2.2, -1.5, "IA"],
      [4.5, 0, "Venda"],
    ]

    const flowNodes: FlowNode[] = nodePositions.map(([x, y, label]) => ({
      pos: new THREE.Vector3(x, y, 0),
      label,
      mesh: null,
    }))

    const edgeDefs: [number, number][] = [
      [0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5],
    ]

    // Node meshes — larger hexagons
    const nodeGeo = new THREE.CircleGeometry(0.5, 6)
    flowNodes.forEach((node) => {
      const mat = new THREE.MeshBasicMaterial({
        color: BLUE_DIM,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(nodeGeo, mat)
      mesh.position.copy(node.pos)
      scene.add(mesh)
      node.mesh = mesh

      // Inner dot — larger
      const dotGeo = new THREE.CircleGeometry(0.18, 16)
      const dotMat = new THREE.MeshBasicMaterial({ color: BLUE_BRIGHT, transparent: true, opacity: 0.9 })
      const dot = new THREE.Mesh(dotGeo, dotMat)
      dot.position.copy(node.pos)
      dot.position.z = 0.01
      scene.add(dot)

      // Label — bigger sprite
      const spriteMat = new THREE.SpriteMaterial({
        map: createLabelTexture(node.label),
        transparent: true,
        opacity: 0.9,
        depthTest: false,
      })
      const sprite = new THREE.Sprite(spriteMat)
      sprite.position.copy(node.pos)
      sprite.position.y -= 0.85
      sprite.scale.set(2.2, 0.55, 1)
      scene.add(sprite)
    })

    // Edge lines — more visible
    const lineMat = new THREE.LineBasicMaterial({ color: LINE_COLOR, transparent: true, opacity: 0.4 })
    edgeDefs.forEach(([from, to]) => {
      const points = [flowNodes[from].pos, flowNodes[to].pos]
      const geo = new THREE.BufferGeometry().setFromPoints(points)
      scene.add(new THREE.Line(geo, lineMat))
    })

    // Particles per edge — larger
    const particleGeo = new THREE.SphereGeometry(0.09, 8, 8)
    const edges: FlowEdge[] = edgeDefs.map(([from, to]) => {
      const particles: THREE.Mesh[] = []
      for (let i = 0; i < 3; i++) {
        const mat = new THREE.MeshBasicMaterial({ color: BLUE_BRIGHT, transparent: true, opacity: 0.9 })
        const mesh = new THREE.Mesh(particleGeo, mat)
        scene.add(mesh)
        particles.push(mesh)
      }
      return { from, to, particles }
    })

    const clock = new THREE.Clock()
    let animId = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      edges.forEach((edge, edgeIdx) => {
        const fromPos = flowNodes[edge.from].pos
        const toPos = flowNodes[edge.to].pos

        edge.particles.forEach((particle, pIdx) => {
          const offset = pIdx / edge.particles.length
          const speed = 0.3 + edgeIdx * 0.02
          const t = ((elapsed * speed + offset) % 1)
          particle.position.lerpVectors(fromPos, toPos, t)
          particle.position.z = 0.05

          const mat = particle.material as THREE.MeshBasicMaterial
          const fade = Math.sin(t * Math.PI)
          mat.opacity = fade * 0.9
          particle.scale.setScalar(0.6 + fade * 0.6)
        })
      })

      flowNodes.forEach((node, i) => {
        if (node.mesh) {
          const pulse = 1 + Math.sin(elapsed * 1.5 + i * 0.8) * 0.06
          node.mesh.scale.setScalar(pulse)
        }
      })

      camera.position.x = Math.sin(elapsed * 0.2) * 0.12
      camera.position.y = Math.cos(elapsed * 0.15) * 0.08
      camera.lookAt(0.5, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => {
      const nw = container?.clientWidth ?? 500
      const nh = container?.clientHeight ?? 400
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      renderer.dispose()
      nodeGeo.dispose()
      particleGeo.dispose()
    }
  }, [])

  return (
    <div className={`relative rounded-xl overflow-hidden w-full h-full min-h-[280px] lg:min-h-[440px] ${className ?? ""}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
