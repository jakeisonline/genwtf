import { cn } from "@/lib/utils"
import { useRef } from "react"
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

  return (
    <div ref={ref} {...events} {...props} className={cn("", className)}>
      {children}
    </div>
  )
}
