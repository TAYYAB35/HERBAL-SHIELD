"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageComparisonSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  beforeLabel?: string
  afterLabel?: string
  initialPosition?: number
  overlayText?: string
  className?: string
  rounded?: boolean
  shadow?: boolean
  height?: number
}

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before image",
  afterAlt = "After image",
  beforeLabel,
  afterLabel,
  initialPosition = 50,
  overlayText,
  className,
  rounded = false,
  shadow = false,
  height = 400,
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleMove = (clientX: number) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerWidth = containerRect.width
      const containerLeft = containerRect.left

      // Calculate position as percentage
      let newPosition = ((clientX - containerLeft) / containerWidth) * 100

      // Clamp position between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition))

      setSliderPosition(newPosition)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none",
        rounded && "rounded-lg",
        shadow && "shadow-lg",
        className,
      )}
      style={{ height }}
    >
      {/* After Image (right side) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          fill
          className="object-cover "
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {afterLabel && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {afterLabel}
          </div>
        )}
      </div>

      {/* Before Image (left side) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          className="object-cover bg-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {beforeLabel && (
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {beforeLabel}
          </div>
        )}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Optional Overlay Text */}
      {overlayText && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-md text-sm">
          {overlayText}
        </div>
      )}
    </div>
  )
}
