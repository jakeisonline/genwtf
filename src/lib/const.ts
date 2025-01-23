export const GENERATIONS = [
  {
    name: "The Greatest Generation",
    start: 1922,
    end: 1927,
    colorStart: "#A3B9D3", // Pastel Navy Blue
    colorStop: "#B0C4DE", // Lighter Pastel Blue
  },
  {
    name: "The Silent Generation",
    start: 1928,
    end: 1945,
    colorStart: "#C08081", // Pastel Burgundy
    colorStop: "#D3A4A6", // Lighter Pastel Pink
  },
  {
    name: "The Baby Boomers",
    start: 1946,
    end: 1964,
    colorStart: "#A8D5BA", // Pastel Forest Green
    colorStop: "#C1E1C1", // Lighter Pastel Green
  },
  {
    name: "Generation X",
    start: 1965,
    end: 1980,
    colorStart: "#B0C4DE", // Pastel Slate Grey
    colorStop: "#D3D3E3", // Lighter Pastel Grey
  },
  {
    name: "Millennials",
    start: 1981,
    end: 1996,
    colorStart: "#FFDAB9", // Pastel Bright Orange
    colorStop: "#FFE4C4", // Lighter Pastel Peach
  },
  {
    name: "Generation Z",
    start: 1997,
    end: 2012,
    colorStart: "#D1B3FF", // Pastel Electric Purple
    colorStop: "#E6CCFF", // Lighter Pastel Lavender
  },
  {
    name: "Generation Alpha",
    start: 2013,
    end: 2022,
    colorStart: "#B3FFFF", // Pastel Aqua Blue
    colorStop: "#CCFFFF", // Lighter Pastel Cyan
  },
  {
    name: "Generation Beta",
    start: 2023,
    end: 2039,
    colorStart: "#C1E1C1", // Pastel Lime Green
    colorStop: "#D8ECD8", // Lighter Pastel Mint
  },
]

export const START_YEAR = 1922
export const END_YEAR = 2039

export const GRID_TEMPLATE_COLUMNS = `repeat(${END_YEAR - START_YEAR + 1}, minmax(100px, 1fr))`
export const GRID_TEMPLATE_ROWS = `repeat(${GENERATIONS.length}, minmax(20px, 1fr))`
