/**
 * Converts a number to a roman numeral. If not a whole number,
 * the roman numeral for the nearest integer will be returned.
 * Negative numbers will be rounded to 0 and an empty string will be returned.
 * @param {*} num
 */
export const numberToRoman = (num) => {
  if (num <= 0) {
    return ''
  }

  num = Math.round(num)
  let numeral = ''

  while (num >= 1000) {
    numeral += 'M'
    num -= 1000
  }

  // Number will be less than 100 now

  if (num >= 900) {
    numeral += 'CM'
    num -= 900
  } else if (num >= 500) {
    numeral += 'D'
    num -= 500
  } else if (num >= 400) {
    numeral += 'CD'
    num -= 400
  }

  // Number will be less than 400 now

  while (num >= 100) {
    numeral += 'C'
    num -= 100
  }

  // Number will be less than 100 now

  if (num >= 90) {
    numeral += 'XC'
    num -= 90
  } else if (num >= 50) {
    numeral += 'L'
    num -= 50
  } else if (num >= 40) {
    numeral += 'XL'
    num -= 40
  }

  // Number will be less than 40 now

  while (num >= 10) {
    numeral += 'X'
    num -= 10
  }

  // Number will be less than 10 now

  if (num === 9) {
    numeral += 'IX'
    num -= 9
  } else if (num >= 5) {
    numeral += 'V'
    num -= 5
  } else if (num === 4) {
    numeral += 'IV'
    num -= 4
  }

  // Number will be less than 5 now

  while (num > 0) {
    numeral += 'I'
    num--
  }

  // Number should be 0 now. Numeral calculated.

  return numeral
}
