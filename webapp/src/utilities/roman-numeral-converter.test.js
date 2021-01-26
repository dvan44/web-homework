import { numberToRoman } from './roman-numeral-converter'

describe('numberToRoman()', () => {
  it('should return the correct roman numberal for the passed in integers', () => {
    const examples = [
      {input: 1, output: 'I'},
      {input: 3, output: 'III'},
      {input: 4, output: 'IV'},
      {input: 9, output: 'IX'},
      {input: 44, output: 'XLIV'},
      {input: 78, output: 'LXXVIII'},
      {input: 129, output: 'CXXIX'},
      {input: 899, output: 'DCCCXCIX'},
      {input: 1994, output: 'MCMXCIV'},
      {input: 3407, output: 'MMMCDVII'},
    ]

    examples.forEach(ex => {
      expect(numberToRoman(ex.input)).toBe(ex.output)
    })
  })

  it('should return empty string if number is less than or equal to 1 or if the input is not a number', () => {
    const examples = [
      0,
      -1,
      -1499,
      'test',
      null,
      undefined,
      {}
    ]

    examples.forEach(ex => {
      expect(numberToRoman(ex)).toBe('')
    })
  })

  it('should round fractions to the nearest whole number before converting to numeral', () => {
    const examples = [
      {input: 1.49, output: 'I'},
      {input: 1.5, output: 'II'},
      {input: 100.01, output: 'C'},
      {input: 23.72, output: 'XXIV'}
    ]

    examples.forEach(ex => {
      expect(numberToRoman(ex.input)).toBe(ex.output)
    })
  })
})
