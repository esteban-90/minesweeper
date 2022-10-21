export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Field = Cell[][]
export type Coords = [number, number]
export type NeighbourItems = Record<string, [number, number]>
export type CellState = Record<string, Cell>

export const getNeighbourItems = ([y, x]: Coords): NeighbourItems => {
  return {
    top: [y - 1, x],
    topRight: [y - 1, x + 1],
    right: [y, x + 1],
    rightBottom: [y + 1, x + 1],
    bottom: [y + 1, x],
    bottomLeft: [y + 1, x - 1],
    left: [y, x - 1],
    leftTop: [y - 1, x - 1],
  }
}

export const checkItemInField = ([y, x]: Coords, { length }: Field): boolean => {
  return y >= 0 && x >= 0 && length - y > 0 && length - x > 0
}

export const incrementNeighbours = (coords: Coords, field: Field): Field => {
  const items = getNeighbourItems(coords)

  for (const item of Object.values(items)) {
    if (checkItemInField(item, field)) {
      const [y, x] = item
      const cell = field[y][x]

      if (cell < 8) field[y][x] = (cell + 1) as Cell
    }
  }

  return field
}

export const cellState: CellState = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  flag: 11,
  weakFlag: 12,
}

export const emptyFieldGenerator = (size: number, state: Cell = cellState.empty): Field => {
  return new Array(size).fill(null).map(() => new Array(size).fill(state))
}

export const errorText = 'Probability must be between 0 and 1'

export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) throw new Error(errorText)

  let unprocessedCells = size ** 2
  let restCellsWithBombs = unprocessedCells * probability
  const result = emptyFieldGenerator(size)

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (restCellsWithBombs / unprocessedCells > Math.random()) {
        result[y][x] = cellState.bomb
        incrementNeighbours([y, x], result)
        restCellsWithBombs--
      }

      unprocessedCells--
    }
  }

  return result
}
