import {
  SubmarineCommand,
  submarineCommands,
} from './data/day-2-data'

export type Coordinate = [number, number]

function main() {
  const [x, y] = getCoordinatesFromCommand(
    submarineCommands,
  )
  console.log(x * y)
}

function getCoordinatesFromCommand(
  commands: SubmarineCommand[],
): Coordinate {
  return commands.reduce(
    ([x, y], command) => {
      const [dx, dy] =
        getDeltaCoordinateFromCommand(command)
      return [x + dx, y + dy]
    },
    [0, 0],
  )
}

function getDeltaCoordinateFromCommand([
  direction,
  magnitude,
]: SubmarineCommand): Coordinate {
  switch (direction) {
    case 'down':
      return [0, magnitude]
    case 'up':
      return [0, -magnitude]
    case 'forward':
      return [magnitude, 0]
  }
}

main()
