import { GenGridBlock } from "@/components/gen-grid-block"
import type { Generation } from "../lib/types"

interface Props {
  gridTemplateColumns: string
  gridTemplateRows: string
  generations: Generation[]
  startYear: number
}

export function GenBars({
  gridTemplateColumns,
  gridTemplateRows,
  generations,
  startYear,
}: Props) {
  return (
    <div
      className="mt-2 grid w-max"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {generations.slice().map((generation, index) => {
        const startColspan = generation.start - startYear
        const genColspan = generation.end - generation.start + 1
        return (
          <GenGridBlock
            key={generation.name}
            generation={generation}
            rowStart={index + 1}
            colStart={startColspan + 1}
            colSpan={genColspan}
          />
        )
      })}
    </div>
  )
}
