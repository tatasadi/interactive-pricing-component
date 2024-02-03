import React, { useState, useRef, MouseEvent } from "react"

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

  const startDragging = (e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true)
    // Listen to mousemove and mouseup events on the document to track movement and release outside the slider bar
    document.addEventListener("mousemove", onDrag)
    document.addEventListener("mouseup", stopDragging)

    // Add touch event listeners
    document.addEventListener("touchmove", onDrag);
    document.addEventListener("touchend", stopDragging);
  }

  const onDrag = (e: any) => {
    e.preventDefault()
    if (!sliderRef.current) return

    const { left, width } = sliderRef.current.getBoundingClientRect()
    let clientX
    // Check if this is a touch event
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX
    } else {
        // Assuming it's a mouse event since it's not a touch event
        clientX = e.clientX
    }    
    // Calculate new value based on the mouse position within the slider bar
    let newValue = ((clientX - left) / width) * 100
    newValue = Math.max(0, Math.min(100, newValue)) // Constrain newValue between 0 and 100
    onChange(newValue)
  }

  const stopDragging = () => {
    setIsDragging(false)
    document.removeEventListener("mousemove", onDrag)
    document.removeEventListener("mouseup", stopDragging)
    // Remove touch event listeners
    document.removeEventListener("touchmove", onDrag);
    document.removeEventListener("touchend", stopDragging);
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
          onTouchStart={startDragging}
        >
          <div className="absolute left-1 h-2 w-2 border-[.4rem] border-transparent border-r-custom-soft-cyan-2"></div>
          <div className="absolute right-1 h-2 w-2 border-[.4rem] border-transparent border-l-custom-soft-cyan-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Slider
