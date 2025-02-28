// Thanks to QoP: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import { useEffect, useState } from "react"

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    }
  }

  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    // Only add event listener on client side
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowDimensions
}
