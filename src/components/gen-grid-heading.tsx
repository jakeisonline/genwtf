import { cn } from "@/lib/utils"

interface Props {
  className?: string
  year: number
}

export function GenGridHeading({ className, year, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative h-6 min-w-2 border-l border-dotted border-gray-300 pl-2 text-sm whitespace-nowrap select-none md:text-base",
        year % 5 === 0 && "border-l-3 border-solid",
        className,
      )}
      {...props}
    >
      {
        // If year is divisable by 5, show year
        year % 5 === 0 && (
          <span className="absolute -top-6.5 -left-5">{year}</span>
        )
      }
    </div>
  )
}
