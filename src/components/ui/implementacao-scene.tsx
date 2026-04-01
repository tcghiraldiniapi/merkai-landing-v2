"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

// Blue palette
const BLUE = new THREE.Color(0x3b82f6)
const BLUE_BRIGHT = new THREE.Color(0x60a5fa)
const BLUE_DIM = new THREE.Color(0x1e3a5f)
const GREEN = new THREE.Color(0x22c55e)
const GREEN_DIM = new THREE.Color(0x14532d)

interface BarData {
  x: number
  targetHeight: number
  currentHeight: number
  mesh: THREE.Mesh | null
  color: THREE.Color
  dimColor: THREE.Color
  phase: number
}

function createMetricTexture(value: string, label: string): THREE.Texture {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 256
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, 512, 256)

  ctx.font = "bold 72px system-ui, -apple-system, sans-serif"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillStyle = "#60a5fa"
  ctx.fillText(value, 256, 90)

  ctx.font = "28px system-ui, -apple-system, sans-serif"
  ctx.fillStyle = "#94a3b8"
  ctx.fillText(label, 256, 170)

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

export function ImplementacaoScene({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const metricsRef = useRef<{ sprites: THREE.Sprite[]; values: number[]; targets: number[] }>({
    sprites: [],
    values: [0, 0, 0],
    targets: [847, 94, 12],
  })

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
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.set(0, 1.5, 9)
    camera.lookAt(0, 0, 0)

    const panelGroup = new THREE.Group()
    panelGroup.rotation.x = -0.15
    panelGroup.rotation.y = 0.1
    scene.add(panelGroup)

    // Background panel
    const panelGeo = new THREE.PlaneGeometry(8, 5, 1, 1)
    const panelMat = new THREE.MeshBasicMaterial({
      color: 0x171717,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    })
    const panel = new THREE.Mesh(panelGeo, panelMat)
    panel.position.z = -0.1
    panelGroup.add(panel)

    // Border
    const borderGeo = new THREE.EdgesGeometry(panelGeo)
    const borderMat = new THREE.LineBasicMaterial({ color: BLUE_DIM, transparent: true, opacity: 0.4 })
    const border = new THREE.LineSegments(borderGeo, borderMat)
    border.position.z = -0.09
    panelGroup.add(border)

    // Bar chart
    const barCount = 8
    const bars: BarData[] = []
    const barGeo = new THREE.BoxGeometry(0.35, 1, 0.15)

    for (let i = 0; i < barCount; i++) {
      const x = -2.5 + i * 0.72
      const isGreen = i >= barCount - 3
      const targetHeight = 0.8 + Math.random() * 2.2 + (isGreen ? 0.5 : 0)
      const color = isGreen ? GREEN : BLUE
      const dimColor = isGreen ? GREEN_DIM : BLUE_DIM

      const mat = new THREE.MeshBasicMaterial({
        color: dimColor,
        transparent: true,
        opacity: 0.8,
      })
      const mesh = new THREE.Mesh(barGeo, mat)
      mesh.position.set(x, -1.5, 0)
      mesh.scale.y = 0.01
      panelGroup.add(mesh)

      bars.push({ x, targetHeight, currentHeight: 0, mesh, color, dimColor, phase: i * 0.15 })
    }

    // Trend line
    const linePoints: THREE.Vector3[] = []
    for (let i = 0; i < barCount; i++) {
      const x = -2.5 + i * 0.72
      const y = -1.5 + bars[i].targetHeight * 0.6 + 0.8
      linePoints.push(new THREE.Vector3(x, y, 0.1))
    }
    const curve = new THREE.CatmullRomCurve3(linePoints)
    const curvePoints = curve.getPoints(50)
    const lineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints)
    const lineMatObj = new THREE.LineBasicMaterial({ color: BLUE_BRIGHT, transparent: true, opacity: 0.6 })
    panelGroup.add(new THREE.Line(lineGeo, lineMatObj))

    // Pulse dot
    const pulseDotGeo = new THREE.CircleGeometry(0.1, 16)
    const pulseDotMat = new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 1 })
    const pulseDot = new THREE.Mesh(pulseDotGeo, pulseDotMat)
    pulseDot.position.copy(curvePoints[curvePoints.length - 1])
    pulseDot.position.z = 0.15
    panelGroup.add(pulseDot)

    // Metric cards
    const metricLabels = ["Leads/mês", "Taxa resp.", "Tempo IA"]
    const metricFormats = [
      (v: number) => Math.round(v).toString(),
      (v: number) => Math.round(v) + "%",
      (v: number) => Math.round(v) + "s",
    ]
    const metricSprites: THREE.Sprite[] = []

    metricLabels.forEach((label, i) => {
      const x = -2.5 + i * 2.5
      const tex = createMetricTexture("—", label)
      const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.9 })
      const sprite = new THREE.Sprite(spriteMat)
      sprite.position.set(x, 1.8, 0.05)
      sprite.scale.set(2.4, 1.2, 1)
      panelGroup.add(sprite)
      metricSprites.push(sprite)
    })
    metricsRef.current.sprites = metricSprites

    // Grid lines
    const gridMat = new THREE.LineBasicMaterial({ color: 0x262626, transparent: true, opacity: 0.5 })
    for (let i = 0; i < 4; i++) {
      const y = -1.5 + i * 0.8
      const pts = [new THREE.Vector3(-3, y, -0.05), new THREE.Vector3(3.2, y, -0.05)]
      panelGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat))
    }

    const clock = new THREE.Clock()
    let animId = 0
    let lastMetricUpdate = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      bars.forEach((bar) => {
        if (bar.mesh) {
          const wave = bar.targetHeight + Math.sin(elapsed * 0.5 + bar.phase) * 0.15
          bar.currentHeight += (wave - bar.currentHeight) * 0.03
          bar.mesh.scale.y = Math.max(0.01, bar.currentHeight)
          bar.mesh.position.y = -1.5 + (bar.currentHeight * 0.5)

          const mat = bar.mesh.material as THREE.MeshBasicMaterial
          const intensity = bar.currentHeight / (bar.targetHeight + 0.5)
          mat.color.lerpColors(bar.dimColor, bar.color, Math.min(1, intensity))
        }
      })

      const pulseScale = 1 + Math.sin(elapsed * 3) * 0.3
      pulseDot.scale.setScalar(pulseScale)
      pulseDotMat.opacity = 0.7 + Math.sin(elapsed * 3) * 0.3

      const { values, targets, sprites } = metricsRef.current
      if (elapsed - lastMetricUpdate > 0.05) {
        lastMetricUpdate = elapsed
        let changed = false
        for (let i = 0; i < 3; i++) {
          if (values[i] < targets[i]) {
            const step = Math.max(1, (targets[i] - values[i]) * 0.08)
            values[i] = Math.min(targets[i], values[i] + step)
            changed = true
          }
        }
        if (changed) {
          sprites.forEach((sprite, i) => {
            const tex = createMetricTexture(metricFormats[i](values[i]), metricLabels[i])
            const mat = sprite.material as THREE.SpriteMaterial
            if (mat.map) mat.map.dispose()
            mat.map = tex
            mat.needsUpdate = true
          })
        }
      }

      panelGroup.rotation.y = 0.1 + Math.sin(elapsed * 0.25) * 0.03
      panelGroup.rotation.x = -0.15 + Math.cos(elapsed * 0.2) * 0.02

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
      panelGeo.dispose()
      barGeo.dispose()
      pulseDotGeo.dispose()
    }
  }, [])

  return (
    <div className={`relative rounded-xl overflow-hidden w-full h-full min-h-[280px] lg:min-h-[440px] ${className ?? ""}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
