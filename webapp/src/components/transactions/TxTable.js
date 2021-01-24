import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'
import { COLORS } from '../../theme/colors'

const styles = css`
  width: 100%;

  .header {
    background: ${COLORS.darkGray};
    color: white;

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
`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data }) {
  return (
    <table css={styles}>
      <tbody>
        <tr className='header'>
          <td >ID</td>
          <td >User ID</td>
          <td >Description</td>
          <td >Merchant ID</td>
          <td >Debit</td>
          <td >Credit</td>
          <td >Amount</td>
        </tr>
        {
          data.map((tx, index) => {
            const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
            return (
              <tr
                className={index % 2 === 0 ? '' : 'row-highlight'}
                css={dataStyles}
                data-testid={`transaction-${id}`}
                key={`transaction-${id}`}
              >
                <td className='truncate' data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td className='truncate' data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td className='truncate' data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td className='text-center' data-testid={makeDataTestId(id, 'debit')}>{debit ? 'X' : ''}</td>
                <td className='text-center' data-testid={makeDataTestId(id, 'credit')}>{credit ? 'X' : ''}</td>
                <td data-testid={makeDataTestId(id, 'amount')}>${(amount / 100).toFixed(2)}</td>
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
  }))
}