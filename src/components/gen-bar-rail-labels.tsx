import type { Generation } from "@/lib/types"

interface Props {
  generations: Generation[]
}

export function GenBarRailLabels({ generations }: Props) {
  return (
    <div className="sticky top-7.5 left-2 z-10 ml-9 flex h-0 flex-col gap-7 text-left select-none md:top-17 md:left-9 md:gap-12">
      {generations.map((generation) => (
        <div key={generation.name} className="text-xs md:text-base">
          {generation.name}
          <span className="ml-1 block text-xs text-gray-500 md:inline">
            {generation.start} - {generation.end}
          </span>
        </div>
      ))}
    </div>
  )
}
