export const GENERATIONS = [
  {
    name: "Generation Beta",
    start: 2023,
    end: 2039,
    colors: {
      block: "#A4B2F5",
      rail: "#EDF0FC",
      border: "#6077EF",
    },
  },
  {
    name: "Generation Alpha",
    start: 2013,
    end: 2022,
    colors: {
      block: "#A2D7AF",
      rail: "#ECF6F0",
      border: "#6DB871",
    },
  },
  {
    name: "Generation Z",
    start: 1997,
    end: 2012,
    colors: {
      block: "#E9C291",
      rail: "#FBF4EA",
      border: "#DA9343",
    },
  },
  {
    name: "Millennials",
    start: 1981,
    end: 1996,
    colors: {
      block: "#DB9F94",
      rail: "#F9EEEC",
      border: "#DA9343",
    },
  },
  {
    name: "Generation X",
    start: 1965,
    end: 1980,
    colors: {
      block: "#BAA0F0",
      rail: "#F2EDFC",
      border: "#8756E1",
    },
  },
  {
    name: "The Baby Boomers",
    start: 1946,
    end: 1964,
    colors: {
      block: "#A4B2F5",
      rail: "#EDF0FC",
      border: "#6077EF",
    },
  },
  {
    name: "The Silent Generation",
    start: 1928,
    end: 1945,
    colors: {
      block: "#A2D7AF",
      rail: "#ECF6F0",
      border: "#6DB871",
    },
  },
  {
    name: "The Greatest Generation",
    start: 1922,
    end: 1927,
    colors: {
      block: "#E9C291",
      rail: "#FBF4EA",
      border: "#DA9343",
    },
  },
]

export const START_YEAR = 1800
export const END_YEAR = 2300

export const GRID_TEMPLATE_COLUMNS = `repeat(${END_YEAR - START_YEAR + 1}, minmax(20px, 1fr))`
export const GRID_TEMPLATE_ROWS = `repeat(${GENERATIONS.length}, minmax(auto, 1fr))`
