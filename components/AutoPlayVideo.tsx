'use client'

import React, { useEffect, useRef } from 'react'

interface AutoPlayVideoProps {
  src: string
}

export default function AutoPlayVideo({ src }: AutoPlayVideoProps) {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          (videoRef.current as HTMLVideoElement).play()
        } else if (videoRef.current) {
          (videoRef.current as HTMLVideoElement).pause()
        }
      })
    })

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <video 
      ref={videoRef}
      className="w-full h-auto"
      muted 
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  )
} 