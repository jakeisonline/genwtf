"use client"
import { Generation } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useLayoutEffect, useRef } from "react"

interface Props {
  generation: Generation
  rowStart: number
  colStart: number
  colSpan: number
  className?: string
  year: number
}

export function GenGridBlock({
  generation,
  rowStart,
  colStart,
  colSpan,
  className,
  year,
}: Props) {
  const blockRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (year === new Date().getFullYear() && blockRef.current) {
      const element = blockRef.current
      const parent = element.parentElement
      if (parent) {
        const elementRect = element.getBoundingClientRect()
        const parentRect = parent.getBoundingClientRect()
        const scrollLeft =
          elementRect.left -
          parentRect.left +
          elementRect.width / 2 -
          parentRect.width / 2
        parent.scrollLeft = scrollLeft
      }
    }
  }, [year])

  return (
    <div
      data-year={year}
      ref={blockRef}
      className={cn("mt-8 h-7 rounded-full shadow-xs md:h-10", className)}
      style={{
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: rowStart,
        backgroundColor: generation.colors.block,
        border: `1px solid ${generation.colors.border || generation.colors.block}`,
      }}
    ></div>
  )
}
