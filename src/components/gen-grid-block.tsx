import { AGE_GROUPS } from "@/lib/const"
import { Generation } from "@/lib/types"
import { cn } from "@/lib/utils"

interface Props {
  generation: Generation
  rowStart: number
  colStart: number
  className?: string
}

export function GenGridBlock({
  generation,
  rowStart,
  colStart,
  className,
}: Props) {
  let nextAgeGroupColStart = colStart

  return (
    <>
      {AGE_GROUPS.map((ageGroup, index) => {
        const ageGroupColSpan = ageGroup.end - ageGroup.start + 1
        const currentAgeGroupColStart = nextAgeGroupColStart
        const isLastAgeGroup = index === AGE_GROUPS.length - 1

        nextAgeGroupColStart += ageGroupColSpan

        return (
          <div
            key={ageGroup.name}
            className={cn(
              "pointer-events-none mt-8 flex h-7 items-center space-x-2 px-4 shadow-xs select-none md:h-10",
              currentAgeGroupColStart === colStart
                ? "rounded-l-full"
                : isLastAgeGroup
                  ? "rounded-r-full"
                  : "",
              className,
            )}
            style={{
              gridColumn: `${currentAgeGroupColStart} / span ${ageGroupColSpan}`,
              gridRow: rowStart,
              backgroundColor: generation.colors.block,
              border: `1px solid ${generation.colors.border || generation.colors.block}`,
              color: generation.colors.text || "inherit",
            }}
          >
            <span className="text-lg">{ageGroup.marker}</span>
            <div
              className={cn(
                "flex flex-col items-start text-xs",
                ageGroup.name === "Baby" && "sr-only",
              )}
            >
              <span className="text-xs">{ageGroup.name}</span>
              <span className="text-xs">
                {ageGroup.start} - {ageGroup.end}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}
