"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

// Blue palette
const BLUE = new THREE.Color(0x3b82f6)
const BLUE_BRIGHT = new THREE.Color(0x60a5fa)
const BLUE_DIM = new THREE.Color(0x1e3a5f)

interface NodeData {
  pos: THREE.Vector3
  label: string
  mesh: THREE.Mesh | null
  labelSprite: THREE.Sprite | null
  baseScale: number
  glowIntensity: number
}

function createTextTexture(text: string, color: string = "#60a5fa"): THREE.Texture {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 128
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, 512, 128)
  ctx.font = "bold 42px system-ui, -apple-system, sans-serif"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillStyle = color
  ctx.fillText(text, 256, 64)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

export function DiagnosticoScene({ className }: { className?: string }) {
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
    camera.position.set(0, 0, 7)

    // Channel labels arranged in a perfect hexagonal grid
    const labels = ["WhatsApp", "CRM", "Email", "Ads", "Site", "Instagram", "Funil", "Vendas", "Suporte", "Analytics", "Leads", "IA"]

    // Hexagonal layout: inner ring (6 nodes) + outer ring (6 nodes)
    const nodes: NodeData[] = []
    // Inner ring — 6 nodes evenly spaced
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2
      const radius = 1.6
      nodes.push({
        pos: new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0),
        label: labels[i],
        mesh: null,
        labelSprite: null,
        baseScale: 0.18,
        glowIntensity: 0,
      })
    }
    // Outer ring — 6 nodes offset by 30 degrees
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2 + Math.PI / 6
      const radius = 3.0
      nodes.push({
        pos: new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0),
        label: labels[i + 6],
        mesh: null,
        labelSprite: null,
        baseScale: 0.15,
        glowIntensity: 0,
      })
    }

    const nodeGeo = new THREE.SphereGeometry(1, 16, 16)
    nodes.forEach((node) => {
      const mat = new THREE.MeshBasicMaterial({ color: BLUE_DIM, transparent: true, opacity: 0.7 })
      const mesh = new THREE.Mesh(nodeGeo, mat)
      mesh.position.copy(node.pos)
      mesh.scale.setScalar(node.baseScale)
      scene.add(mesh)
      node.mesh = mesh

      const spriteMat = new THREE.SpriteMaterial({
        map: createTextTexture(node.label),
        transparent: true,
        opacity: 0,
        depthTest: false,
      })
      const sprite = new THREE.Sprite(spriteMat)
      sprite.position.copy(node.pos)
      sprite.position.y -= 0.45
      sprite.scale.set(1.8, 0.45, 1)
      scene.add(sprite)
      node.labelSprite = sprite
    })

    // Connection lines — inner to adjacent outer, and inner ring connections
    const lineMat = new THREE.LineBasicMaterial({ color: BLUE_DIM, transparent: true, opacity: 0.25 })
    // Inner ring connections
    for (let i = 0; i < 6; i++) {
      const next = (i + 1) % 6
      const geo = new THREE.BufferGeometry().setFromPoints([nodes[i].pos, nodes[next].pos])
      scene.add(new THREE.Line(geo, lineMat))
    }
    // Inner to nearest outer
    for (let i = 0; i < 6; i++) {
      const outerA = 6 + i
      const outerB = 6 + ((i + 5) % 6)
      const geoA = new THREE.BufferGeometry().setFromPoints([nodes[i].pos, nodes[outerA].pos])
      const geoB = new THREE.BufferGeometry().setFromPoints([nodes[i].pos, nodes[outerB].pos])
      scene.add(new THREE.Line(geoA, lineMat))
      scene.add(new THREE.Line(geoB, lineMat))
    }

    // Scan ring
    const ringGeo = new THREE.RingGeometry(0.1, 0.18, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: BLUE_BRIGHT,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    scene.add(ring)

    // Scan trail
    const trailGeo = new THREE.RingGeometry(0.95, 1.0, 64)
    const trailMat = new THREE.MeshBasicMaterial({
      color: BLUE,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    })
    const trail = new THREE.Mesh(trailGeo, trailMat)
    scene.add(trail)

    const clock = new THREE.Clock()
    let animId = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      const scanCycle = elapsed % 4
      const scanRadius = scanCycle * 1.2
      ring.scale.setScalar(scanRadius + 0.5)
      ringMat.opacity = Math.max(0, 0.7 - scanCycle * 0.2)

      const trailCycle = (elapsed + 0.5) % 4
      trail.scale.setScalar(trailCycle * 1.1 + 0.3)
      trailMat.opacity = Math.max(0, 0.3 - trailCycle * 0.1)

      nodes.forEach((node) => {
        const dist = node.pos.length()
        const scanDist = scanRadius + 0.5

        if (Math.abs(dist - scanDist) < 0.6 && scanCycle < 3) {
          node.glowIntensity = Math.min(1, node.glowIntensity + 0.08)
        } else {
          node.glowIntensity = Math.max(0, node.glowIntensity - 0.015)
        }

        if (node.mesh) {
          const mat = node.mesh.material as THREE.MeshBasicMaterial
          mat.color.lerpColors(BLUE_DIM, BLUE_BRIGHT, node.glowIntensity)
          mat.opacity = 0.7 + node.glowIntensity * 0.3
          const s = node.baseScale * (1 + node.glowIntensity * 0.5)
          node.mesh.scale.setScalar(s)
          node.mesh.position.y = node.pos.y + Math.sin(elapsed * 0.8 + node.pos.x) * 0.04
        }

        if (node.labelSprite) {
          const spriteMat = node.labelSprite.material as THREE.SpriteMaterial
          spriteMat.opacity = node.glowIntensity * 0.95
        }
      })

      scene.rotation.z = Math.sin(elapsed * 0.15) * 0.03

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
      ringGeo.dispose()
      trailGeo.dispose()
    }
  }, [])

  return (
    <div className={`relative rounded-xl overflow-hidden w-full h-full min-h-[280px] lg:min-h-[440px] ${className ?? ""}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
