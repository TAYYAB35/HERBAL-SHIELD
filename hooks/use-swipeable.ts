"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface SwipeableHandlers {
  onSwipedLeft?: () => void
  onSwipedRight?: () => void
  onSwipedUp?: () => void
  onSwipedDown?: () => void
  preventDefaultTouchmoveEvent?: boolean
  trackMouse?: boolean
}

interface SwipeableOutput {
  ref?: React.RefObject<HTMLDivElement>
  onMouseDown?: (e: React.MouseEvent) => void
  onTouchStart?: (e: React.TouchEvent) => void
  onTouchMove?: (e: React.TouchEvent) => void
  onTouchEnd?: (e: React.TouchEvent) => void
}

export function useSwipeable({
  onSwipedLeft,
  onSwipedRight,
  onSwipedUp,
  onSwipedDown,
  preventDefaultTouchmoveEvent = false,
  trackMouse = false,
}: SwipeableHandlers): SwipeableOutput {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const touchEndRef = useRef<{ x: number; y: number } | null>(null)
  const mouseDownRef = useRef<boolean>(false)

  // Minimum distance in pixels to be considered a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    touchEndRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (preventDefaultTouchmoveEvent) e.preventDefault()
    const touch = e.touches[0]
    touchEndRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return

    const distanceX = touchStartRef.current.x - touchEndRef.current.x
    const distanceY = touchStartRef.current.y - touchEndRef.current.y
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY)

    if (isHorizontalSwipe) {
      if (Math.abs(distanceX) > minSwipeDistance) {
        if (distanceX > 0) {
          onSwipedLeft?.()
        } else {
          onSwipedRight?.()
        }
      }
    } else {
      if (Math.abs(distanceY) > minSwipeDistance) {
        if (distanceY > 0) {
          onSwipedUp?.()
        } else {
          onSwipedDown?.()
        }
      }
    }

    touchStartRef.current = null
    touchEndRef.current = null
  }

  const onMouseDown = trackMouse
    ? (e: React.MouseEvent) => {
        mouseDownRef.current = true
        touchStartRef.current = { x: e.clientX, y: e.clientY }
        touchEndRef.current = { x: e.clientX, y: e.clientY }
      }
    : undefined

  useEffect(() => {
    if (!trackMouse) return

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseDownRef.current) return
      touchEndRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseUp = () => {
      if (!mouseDownRef.current) return
      mouseDownRef.current = false
      onTouchEnd()
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [trackMouse])

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
  }
}
