import React from 'react'
import { arrayOf, string, bool, number, shape, func } from 'prop-types'
import { css } from '@emotion/core'
import { COLORS } from '../../theme/colors'
import EditSvg from '../../assets/edit.svg'
import DeleteSvg from '../../assets/delete.svg'
import { TxType } from '../transactions/transaction-type'
import { Num } from '../num/Num'

const styles = css`
  width: 100%;

  .header {
    font-weight: bold;

    td {
      padding: 5px;
      text-align: center;
    }
  }

  td {
    padding: 15px;
  }

  .row-highlight {
    background: ${COLORS.lightGray}
  }

  .indicator-header {
    background: white;
  }
`

const dataStyles = css`
  td.truncate {
    text-overflow: ellipsis;
    max-width: 75px;
    white-space: nowrap;
    overflow: hidden;
  }

  .text-center {
    text-align: center;
  }

  .tx-action-btns {
    display: flex;
    justify-content: space-around;

    button {
      background: none;
      border: none;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }
    }
  }
`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

const getIndicatorClassName = (description) => {
  return `${Object.values(TxType).indexOf(description) >= 0 ? description : TxType.other}`
}

export function TxTable ({ data, deleteTxHandler, updateTxHandler }) {
  return (
    <table css={styles}>
      <tbody>
        <tr className='header'>
          <td className='indicator-header' />
          <td >ID</td>
          <td >User ID</td>
          <td >Description</td>
          <td >Merchant ID</td>
          <td >Debit</td>
          <td >Credit</td>
          <td >Amount</td>
          <td >Manage</td>
        </tr>
        {
          data.map((tx, index) => {
            const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
            const deleteTx = () => deleteTxHandler(id)
            const updateTx = () => updateTxHandler(id)

            return (
              <tr
                className={index % 2 === 0 ? '' : 'row-highlight'}
                css={dataStyles}
                data-testid={`transaction-${id}`}
                key={`transaction-${id}`}
              >
                <td className={getIndicatorClassName(description)} />
                <td className='truncate' data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td className='truncate' data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td className='truncate' data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td className='text-center' data-testid={makeDataTestId(id, 'debit')}>{debit ? (<span>&#10003;</span>) : ''}</td>
                <td className='text-center' data-testid={makeDataTestId(id, 'credit')}>{credit ? (<span>&#10003;</span>) : ''}</td>
                <td data-testid={makeDataTestId(id, 'amount')}>
                  <span>$</span>
                  <Num number={amount.toFixed(2)} />
                </td>
                <td className='tx-action-btns'>
                  <button onClick={updateTx}>
                    <img alt='update transaction' src={EditSvg} />
                  </button>
                  <button className='delete' onClick={deleteTx}>
                    <img alt='update transaction' src={DeleteSvg} />
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  })),
  deleteTxHandler: func,
  updateTxHandler: func
}
