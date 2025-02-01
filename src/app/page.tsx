import { GenBarRailLabels } from "@/components/gen-bar-rail-labels"
import { GenBarRails } from "@/components/gen-bar-rails"
import { GenBars } from "@/components/gen-bars"
import { GenGridHeader } from "@/components/gen-grid-header"
import GenSelector from "@/components/gen-selector"
import GridDraggable from "@/components/grid-draggable"
import {
  END_YEAR,
  GENERATIONS,
  GRID_TEMPLATE_COLUMNS,
  GRID_TEMPLATE_ROWS,
  START_YEAR,
} from "@/lib/const"

export default function Home() {
  const years = Array.from(
    { length: END_YEAR - START_YEAR + 1 },
    (_, i) => START_YEAR + i,
  )

  return (
    <>
      <h1 className="text-foreground mb-4 text-4xl leading-none font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        They&apos;re how old?!
      </h1>
      <div className="relative">
        <GenSelector />
        <GridDraggable
          id="grid-container"
          className="no-scrollbar relative cursor-grab overflow-x-scroll overflow-y-hidden active:cursor-grabbing"
        >
          <GenBarRailLabels generations={GENERATIONS} />

          <div className="relative ml-6 grid h-max">
            <GenGridHeader
              gridTemplateColumns={GRID_TEMPLATE_COLUMNS}
              years={years}
            />
            <GenBarRails
              gridTemplateColumns={GRID_TEMPLATE_COLUMNS}
              gridTemplateRows={GRID_TEMPLATE_ROWS}
              generations={GENERATIONS}
            />
            <GenBars
              gridTemplateColumns={GRID_TEMPLATE_COLUMNS}
              gridTemplateRows={GRID_TEMPLATE_ROWS}
              generations={GENERATIONS}
              startYear={START_YEAR}
            />
          </div>
        </GridDraggable>
      </div>
    </>
  )
}
