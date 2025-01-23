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
      const container = document.querySelector(".relative.overflow-x-scroll")

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
            setIntersectingHeading(heading.textContent)
          }
        })
      }
    }

    const container = document.querySelector(".relative.overflow-x-scroll")
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
      const age = year - generation.start
      return age >= 0 ? age : "Not born yet"
    })
  }

  const ages = calculateAges()

  return (
    <div
      className="gen-selector top-38 fixed left-0 z-20 h-full border-l border-red-600"
      style={{
        transform: `translateX(${blockWidth * nearestMiddleBlock}px)`,
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="bg-red-600 px-2">{intersectingHeading}</div>
        <div className="flex flex-col gap-12">
          {ages.reverse().map((age, index) => (
            <div key={index}>{age} years old</div>
          ))}
        </div>
      </div>
    </div>
  )
}
