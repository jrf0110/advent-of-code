import {
  SubmarineCommand,
  submarineCommands,
} from './data/day-2-data'

export type Coordinate = [number, number, number]

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
    ([x, y, a], command, i) => {
      const [dx, dy, ay] =
        getDeltaCoordinateFromCommandAndAim(command, a)
      return [x + dx, y + dy, a + ay]
    },
    [0, 0, 0],
  )
}

function getDeltaCoordinateFromCommandAndAim(
  [direction, magnitude]: SubmarineCommand,
  aim: number,
): Coordinate {
  switch (direction) {
    case 'down':
      return [0, 0, magnitude]
    case 'up':
      return [0, 0, -magnitude]
    case 'forward':
      return [magnitude, aim * magnitude, 0]
  }
}

main()
