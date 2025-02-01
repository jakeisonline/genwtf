import type { Generation } from "@/lib/types"

interface Props {
  gridTemplateColumns: string
  gridTemplateRows: string
  generations: Generation[]
}

export function GenBarRails({
  gridTemplateColumns,
  gridTemplateRows,
  generations,
}: Props) {
  return (
    <div
      className="absolute -z-10 mt-15 grid w-max gap-y-8 md:mt-23"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {generations.map((generation) => (
        <div
          key={generation.name}
          className={`col-span-full h-7 rounded-full md:h-10`}
          style={{ backgroundColor: generation.colors.rail }}
        />
      ))}
    </div>
  )
}
