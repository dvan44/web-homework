import { css } from '@emotion/core'
import { COLORS } from './colors'
import { TxType, txTypeToColor } from '../components/transactions/transaction-type'

// Global styles
export const styles = css`
  * {
    color: ${COLORS.darkGray};
    font-family: Verdana, sans-serif;
    font-size: 16px;
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

  .${TxType.auto} {
    background: ${txTypeToColor(TxType.auto)};
  }
  .${TxType.education} {
    background: ${txTypeToColor(TxType.education)};
  }
  .${TxType.entertainment} {
    background: ${txTypeToColor(TxType.entertainment)};
  }
  .${TxType.food} {
    background: ${txTypeToColor(TxType.food)};
  }
  .Housing {
    background: ${txTypeToColor(TxType.housing)};
  }
  .${TxType.other} {
    background: ${txTypeToColor(TxType.other)};
  }
  .${TxType.subscriptions} {
    background: ${txTypeToColor(TxType.subscriptions)};
  }
`
