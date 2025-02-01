import { Generation } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  generation: Generation
  rowStart: number
  colStart: number
  colSpan: number
  className?: string
}

export function GenGridBlock({
  generation,
  rowStart,
  colStart,
  colSpan,
  className,
}: Props) {
  return (
    <div
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
