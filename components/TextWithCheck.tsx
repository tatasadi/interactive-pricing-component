import Image from "next/image"
import React from "react"
import iconcheck from "@/public/images/icon-check.svg"

export default function TextWithCheck({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="flex items-center gap-4 text-xs font-semibold leading-normal">
      <Image src={iconcheck} alt="check" />
      <span>{children}</span>
    </p>
  )
}
