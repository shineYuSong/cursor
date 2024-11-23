'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface HoverImageProps {
  staticSrc: string
  hoverSrc: string
  alt: string
}

export default function HoverImage({ staticSrc, hoverSrc, alt }: HoverImageProps) {
  const [currentSrc, setCurrentSrc] = useState(staticSrc)

  return (
    <div className="transition-transform hover:scale-105">
      <Image
        src={currentSrc}
        alt={alt}
        width={400}
        height={300}
        onMouseEnter={() => setCurrentSrc(hoverSrc)}
        onMouseLeave={() => setCurrentSrc(staticSrc)}
      />
    </div>
  )
} 