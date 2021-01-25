import React from 'react'
import { number } from 'prop-types'
import { numberToRoman } from '../../utilities/roman-numeral-converter'

export function Num ({ number }) {
  const showAsNumeral = JSON.parse(window.sessionStorage.getItem('showAsNumeral'))
  let valueToDisplay = number
  if (showAsNumeral) {
    valueToDisplay = numberToRoman(number)
  }

  return (
    <span>{valueToDisplay}</span>
  )
}

Num.propTypes = {
  number: number
}
