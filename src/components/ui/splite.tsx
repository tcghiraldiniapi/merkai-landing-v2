'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <>
      <style>{`
        .spline-watermark,
        [class*="spline-watermark"],
        [id*="spline-watermark"],
        a[href*="spline.design"] { display: none !important; }
      `}</style>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          style={{ background: "transparent" }}
        />
      </Suspense>
    </>
  )
}
