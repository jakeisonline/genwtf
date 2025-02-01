import { GenGridHeading } from "@/components/gen-grid-heading"

interface Props {
  gridTemplateColumns: string
  years: number[]
}

export function GenGridHeader({ gridTemplateColumns, years }: Props) {
  return (
    <div
      className="grid-container relative mt-7 grid text-left"
      style={{
        gridTemplateColumns: gridTemplateColumns,
      }}
    >
      {years.map((year) => (
        <GenGridHeading
          key={year}
          className="grid-item select-none data-[selected=true]:font-bold"
          data-year={year}
          data-selected={false}
          year={year}
        />
      ))}
    </div>
  )
}
