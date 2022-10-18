import type { Field, Cell, Coords, NeighbourItems } from '@/helpers'
import {
  cellState,
  errorText,
  getNeighbourItems,
  checkItemInField,
  incrementNeighbours,
  emptyFieldGenerator,
  fieldGenerator,
} from '@/helpers'

const { empty, bomb, hidden } = cellState

describe('Helpers test cases:', () => {
  describe('incrementNeighbours():', () => {
    it('field with only one item', () => {
      const coords: Coords = [0, 0]
      const field: Field = [[bomb]]

      expect(incrementNeighbours(coords, field)).toStrictEqual(field)
    })

    describe('field 2×2:', () => {
      const coords: Coords = [0, 0]

      it('with one mine', () => {
        const field: Field = [
          [bomb, empty],
          [empty, empty],
        ]

        const result: Field = [
          [bomb, 1],
          [1, 1],
        ]

        expect(incrementNeighbours(coords, field)).toStrictEqual(result)
      })

      it('with two mines', () => {
        const field: Field = [
          [bomb, empty],
          [empty, bomb],
        ]

        const result: Field = [
          [bomb, 1],
          [1, bomb],
        ]

        expect(incrementNeighbours(coords, field)).toStrictEqual(result)
      })
    })

    describe('field 3×3:', () => {
      const coords: Coords = [1, 1]

      it('with one centered mine', () => {
        const field: Field = [
          [empty, empty, empty],
          [empty, bomb, empty],
          [empty, empty, empty],
        ]

        const result: Field = [
          [1, 1, 1],
          [1, bomb, 1],
          [1, 1, 1],
        ]

        expect(incrementNeighbours(coords, field)).toStrictEqual(result)
      })

      it('with two mines', () => {
        const field: Field = [
          [0, 1, bomb],
          [0, bomb, 1],
          [0, 0, 0],
        ]

        const result: Field = [
          [1, 2, bomb],
          [1, bomb, 2],
          [1, 1, 1],
        ]

        expect(incrementNeighbours(coords, field)).toStrictEqual(result)
      })
    })

    describe('field 9×9:', () => {
      it('with 7 mines', () => {
        const coords: Coords = [4, 5]
        const field: Field = [
          [9, 1, 0, 0, 0, 0, 1, 1, 1],
          [1, 1, 1, 1, 1, 0, 1, 9, 1],
          [0, 0, 1, 9, 1, 0, 2, 2, 2],
          [0, 0, 1, 1, 1, 0, 1, 9, 1],
          [0, 1, 1, 1, 1, 9, 1, 1, 1],
          [0, 1, 9, 2, 1, 1, 0, 0, 0],
          [0, 1, 1, 2, 9, 1, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]

        const result: Field = [
          [9, 1, 0, 0, 0, 0, 1, 1, 1],
          [1, 1, 1, 1, 1, 0, 1, 9, 1],
          [0, 0, 1, 9, 1, 0, 2, 2, 2],
          [0, 0, 1, 1, 2, 1, 2, 9, 1],
          [0, 1, 1, 1, 2, 9, 2, 1, 1],
          [0, 1, 9, 2, 2, 2, 1, 0, 0],
          [0, 1, 1, 2, 9, 1, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]

        expect(incrementNeighbours(coords, field)).toStrictEqual(result)
      })

      it('with 11 mines', () => {
        const coords: Coords = [5, 4]
        const field: Field = [
          [9, 2, 9, 1, 0, 0, 1, 1, 1],
          [1, 2, 2, 2, 1, 0, 1, 9, 1],
          [0, 0, 1, 9, 1, 0, 2, 2, 2],
          [0, 0, 1, 1, 1, 0, 1, 9, 1],
          [0, 1, 1, 1, 1, 9, 1, 1, 1],
          [0, 1, 9, 2, 9, 1, 0, 0, 0],
          [0, 2, 2, 3, 9, 1, 1, 1, 1],
          [0, 1, 9, 2, 1, 1, 1, 9, 1],
          [0, 1, 1, 1, 0, 0, 1, 1, 1],
        ]

        const result: Field = [
          [9, 2, 9, 1, 0, 0, 1, 1, 1],
          [1, 2, 2, 2, 1, 0, 1, 9, 1],
          [0, 0, 1, 9, 1, 0, 2, 2, 2],
          [0, 0, 1, 1, 1, 0, 1, 9, 1],
          [0, 1, 1, 2, 2, 9, 1, 1, 1],
          [0, 1, 9, 3, 9, 2, 0, 0, 0],
          [0, 2, 2, 4, 9, 2, 1, 1, 1],
          [0, 1, 9, 2, 1, 1, 1, 9, 1],
          [0, 1, 1, 1, 0, 0, 1, 1, 1],
        ]

        expect(incrementNeighbours(coords, field)).toStrictEqual(result)
      })
    })
  })

  describe('getNeighbourItems():', () => {
    it('with [0, 0] coords', () => {
      const coords: Coords = [0, 0]
      const items: NeighbourItems = {
        top: [-1, 0],
        topRight: [-1, 1],
        right: [0, 1],
        rightBottom: [1, 1],
        bottom: [1, 0],
        bottomLeft: [1, -1],
        left: [0, -1],
        leftTop: [-1, -1],
      }

      expect(getNeighbourItems(coords)).toStrictEqual(items)
    })

    it('with [3, 3] coords', () => {
      const coords: Coords = [3, 3]
      const items: NeighbourItems = {
        top: [2, 3],
        topRight: [2, 4],
        right: [3, 4],
        rightBottom: [4, 4],
        bottom: [4, 3],
        bottomLeft: [4, 2],
        left: [3, 2],
        leftTop: [2, 2],
      }

      expect(getNeighbourItems(coords)).toStrictEqual(items)
    })
  })

  describe('checkItemInField():', () => {
    describe('simple cases:', () => {
      const field: Field = [[empty]]

      it('out of "y" range', () => {
        const coords: Coords = [1, 0]
        expect(checkItemInField(coords, field)).toBe(false)
      })

      it('out of "x" range', () => {
        const coords: Coords = [0, -1]
        expect(checkItemInField(coords, field)).toBe(false)
      })

      it('in "x" and "y" range', () => {
        const coords: Coords = [0, 0]
        expect(checkItemInField(coords, field)).toBe(true)
      })
    })

    describe('big field:', () => {
      const field: Field = [
        [empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty],
      ]

      it('out of "x" range', () => {
        const coords: Coords = [5, 0]
        expect(checkItemInField(coords, field)).toBe(false)
      })

      it('out of "x" range with negative index', () => {
        const coords: Coords = [-1, 0]
        expect(checkItemInField(coords, field)).toBe(false)
      })

      it('out of "y" range', () => {
        const coords: Coords = [0, 5]
        expect(checkItemInField(coords, field)).toBe(false)
      })

      it('in "x" and "y" range', () => {
        const coords: Coords = [3, 4]
        expect(checkItemInField(coords, field)).toBe(true)
      })
    })
  })

  describe('emptyFieldGenerator():', () => {
    it('field 2×2', () => {
      const result: Field = [
        [empty, empty],
        [empty, empty],
      ]

      expect(emptyFieldGenerator(2)).toStrictEqual(result)
    })

    describe('field 3×3:', () => {
      it('with empty state', () => {
        const result: Field = [
          [empty, empty, empty],
          [empty, empty, empty],
          [empty, empty, empty],
        ]

        expect(emptyFieldGenerator(3)).toStrictEqual(result)
      })

      it('with hidden state', () => {
        const result: Field = [
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
          [hidden, hidden, hidden],
        ]

        expect(emptyFieldGenerator(3, hidden)).toStrictEqual(result)
      })
    })
  })

  describe('fieldGenerator():', () => {
    const cellWithBombFilter = (cell: Cell) => cell === bomb

    it('with wrong probability', () => {
      const size = 1
      const probabilities = [-1, 2]

      expect(() => fieldGenerator(size, probabilities[0])).toThrow(errorText)
      expect(() => fieldGenerator(size, probabilities[1])).toThrow(errorText)
    })

    it('with the smallest possible field without any mine', () => {
      const size = 1
      const probability = 0
      const result: Field = [[empty]]

      expect(fieldGenerator(size, probability)).toStrictEqual(result)
    })

    it('with a bigger field without any mine', () => {
      const size = 10
      const probability = 0
      const result: Field = [
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
      ]

      expect(fieldGenerator(size, probability)).toStrictEqual(result)
    })

    it('with the smallest possible field with one mine', () => {
      const size = 1
      const probability = 1
      const result: Field = [[bomb]]

      expect(fieldGenerator(size, probability)).toStrictEqual(result)
    })

    describe('field 2×2:', () => {
      it('with mines', () => {
        const size = 2
        const probability = 1
        const result: Field = [
          [bomb, bomb],
          [bomb, bomb],
        ]

        expect(fieldGenerator(size, probability)).toStrictEqual(result)
      })

      it('with 50% probability', () => {
        const field = fieldGenerator(2, 0.5)
        const flatField = field.flat()
        const cellsWithBombs = flatField.filter(cellWithBombFilter)
        const emptyCells = flatField.filter((cell: Cell) => cell === 2)

        expect(cellsWithBombs).toHaveLength(2)
        expect(emptyCells).toHaveLength(2)
      })
    })

    it('real game field size = 10×10 with 1/4 mined cells (~25 mines)', () => {
      const size = 10
      const mines = 25
      const probability = mines / size ** 2
      const field = fieldGenerator(size, probability)
      const flatField = field.flat()

      expect([...field[0], ...field[1]].join('')).not.toBe('99999999999999999999')
      expect(flatField.filter(cellWithBombFilter)).toHaveLength(25)
    })
  })
})
