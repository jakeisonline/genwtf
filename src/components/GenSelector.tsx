"use client"

import { GENERATIONS } from "@/lib/const"
import useWindowDimensions from "@/lib/hooks/use-window-dimensions"
import { useEffect, useState } from "react"

export default function GenSelector() {
  const { width } = useWindowDimensions()
  const [intersectingHeading, setIntersectingHeading] = useState<string | null>(
    null,
  )

  useEffect(() => {
    const updateIntersectingHeading = () => {
      const selector = document.querySelector(".gen-selector")
      const headings = document.querySelectorAll(".grid-item")
      const container = document.querySelector("#grid-container")

      if (selector && container) {
        const selectorRect = selector.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        const selectorLeft = selectorRect.left - containerRect.left

        headings.forEach((heading) => {
          const headingRect = heading.getBoundingClientRect()
          if (
            selectorLeft >= headingRect.left &&
            selectorLeft <= headingRect.right
          ) {
            setIntersectingHeading(heading.getAttribute("data-year"))
            heading.setAttribute("data-selected", "true")
          } else {
            heading.setAttribute("data-selected", "false")
          }
        })
      }
    }

    const container = document.querySelector("#grid-container")
    container?.addEventListener("scroll", updateIntersectingHeading)
    window.addEventListener("resize", updateIntersectingHeading)
    updateIntersectingHeading()

    return () => {
      container?.removeEventListener("scroll", updateIntersectingHeading)
      window.removeEventListener("resize", updateIntersectingHeading)
    }
  }, [width])

  // round up to whole number
  const blockWidth = 99
  const widthInBlocks = Math.floor(width / 99)
  const nearestMiddleBlock = Math.ceil(widthInBlocks / 2)

  const calculateAges = () => {
    if (!intersectingHeading) return []
    const year = parseInt(intersectingHeading, 10)
    return GENERATIONS.map((generation) => {
      const eldestAge = year - generation.start
      const youngestAge = year - generation.end

      if (eldestAge < 0) return null

      return {
        eldest: eldestAge,
        youngest: youngestAge,
      }
    })
  }

  const ages = calculateAges()

  const stringifyAges = ({
    eldest,
    youngest,
  }: {
    eldest: number
    youngest: number
  }) => {
    if (youngest === 0) return `${eldest} years old`
    if (youngest < 0) return `${eldest} years old`
    return `${youngest} - ${eldest} years old`
  }

  return (
    <div
      className="gen-selector border-foreground absolute z-40 mt-9 border-l-3 pb-16 md:mt-0"
      style={{
        transform: `translateX(${blockWidth * nearestMiddleBlock}px)`,
      }}
    >
      <div className="bg-foreground text-background absolute -top-1 -left-7.5 rounded-md px-2 py-1 text-xl font-bold">
        {intersectingHeading}
      </div>
      <div className="mt-17 flex flex-col gap-11 pl-2 text-xs md:gap-12 md:text-base">
        {ages.map(
          (age, index) =>
            (age && (
              <div key={index} className="flex flex-col text-left select-none">
                <div>{stringifyAges(age)}</div>
              </div>
            )) || (
              <div className="text-left select-none" key={index}>
                ...
              </div>
            ),
        )}
      </div>
    </div>
  )
}
