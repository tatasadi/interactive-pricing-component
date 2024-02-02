"use client"
import React, { useState, useRef } from "react"
import Image from "next/image"
import iconSlider from "@/public/images/icon-slider.svg"

const Slider = ({
  className = "",
  value,
  onChange,
}: {
  className?: string
  value: number
  onChange: (value: number) => void
}) => {
  const [isDragging, setIsDragging] = useState(false) // State to track dragging
  const sliderRef = useRef<HTMLDivElement>(null) // Ref for the slider bar

  const startDragging = (e) => {
    setIsDragging(true)
    // Listen to mousemove and mouseup events on the window to track movement and release outside the slider bar
    window.addEventListener("mousemove", onDrag)
    window.addEventListener("mouseup", stopDragging)
  }

  const onDrag = (e) => {
    e.preventDefault()
    if (!sliderRef.current) return

    const { left, width } = sliderRef.current.getBoundingClientRect()
    // Calculate new value based on the mouse position within the slider bar
    let newValue = ((e.clientX - left) / width) * 100
    newValue = Math.max(0, Math.min(100, newValue)) // Constrain newValue between 0 and 100
    onChange(newValue)
  }

  const stopDragging = () => {
    setIsDragging(false)
    window.removeEventListener("mousemove", onDrag)
    window.removeEventListener("mouseup", stopDragging)
  }

  return (
    <div className={className} ref={sliderRef}>
      <div className="relative h-2 rounded-[-.3125rem] bg-neutral-light-grayish-blue">
        <div
          className="absolute h-full bg-custom-soft-cyan"
          style={{ width: `${value}%` }}
        ></div>
        <div
          className={`absolute -top-4 flex h-10 w-10 -translate-x-1/2 cursor-grab items-center justify-center rounded-full bg-custom-strong-cyan shadow-[0_15px_25px_rgba(122,234,223,.9)] hover:bg-custom-soft-cyan`}
          style={{
            left: `${value}%`,
            cursor: isDragging ? "grabbing" : "grab",
            backgroundColor: isDragging ? "hsl(174, 65%, 41%)" : "",
          }} // Adjust thumb position based on value
          onMouseDown={startDragging}
        >
          <div className="absolute left-1 h-2 w-2 border-[.4rem] border-transparent border-r-custom-soft-cyan-2"></div>
          <div className="absolute right-1 h-2 w-2 border-[.4rem] border-transparent border-l-custom-soft-cyan-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Slider
