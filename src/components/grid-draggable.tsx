"use client"

import { cn } from "@/lib/utils"
import { useLayoutEffect, useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"

export default function GridDraggable({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref)

  useLayoutEffect(() => {
    const container = ref.current
    if (!container) return

    // Find the element representing current year
    const currentYear = new Date().getFullYear()
    const currentYearElement = container.querySelector(
      `[data-year="${currentYear}"]`,
    )

    if (currentYearElement) {
      const containerWidth = container.offsetWidth
      const elementRect = currentYearElement.getBoundingClientRect()

      // Calculate scroll position to center the element
      const scrollPosition =
        elementRect.left +
        container.scrollLeft -
        containerWidth / 2 +
        elementRect.width / 2

      container.scrollLeft = scrollPosition
    }
  }, [])

  return (
    <div ref={ref} {...events} {...props} className={cn("", className)}>
      {children}
    </div>
  )
}
