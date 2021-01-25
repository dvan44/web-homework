import { css } from '@emotion/core'
import { COLORS } from './colors'
import { TxType, txTypeToColor } from '../components/transactions/transaction-type'

// Dynamically build all classes needed for the different transaction types
const txTypeClasses = () => {
  let classes = ''
  Object.values(TxType).forEach(type => {
    classes += `.${type} { background: ${txTypeToColor(type)}; }\n`
  })
  return classes
}

// Global styles
export const styles = css`
  * {
    color: ${COLORS.darkGray};
    font-family: Verdana, sans-serif;
    font-size: 16px;
  }

  .bold {
    font-weight: bold;
  }

  .text-center {
    text-align: center;
  }

  .text-primary {
    color: ${COLORS.primary};
  }

  .text-secondary {
    color: ${COLORS.secondary};
  }

  .text-white {
    color: ${COLORS.white};
  }

  .card {
    padding: 24px;
    border-radius: 10px;
    background ${COLORS.white};
    box-shadow: 0 5px 10px 2px ${COLORS.grey};
  }

  ${txTypeClasses()}
`
