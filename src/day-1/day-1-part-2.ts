import { dayOneMeasurements } from './data/day-1-measurements'

function main() {
  console.log(getNumIncreases(dayOneMeasurements))
}

const getNumIncreases = (measurements: number[]) =>
  measurements
    .map((x, i, a) => x + (a[i + 1] || 0) + (a[i + 2] || 0))
    .reduce(
      ([n, a], b) => (b > a ? [n + 1, b] : [n, b]),
      [0, Infinity],
    )[0]

main()
