import React, { Fragment } from 'react'
import { TxChart } from '../components/charts/TxChart'
import { PaymentChart } from '../components/charts/PaymentChart'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'

const styles = css`
  margin: auto;
  width: 90%;
  max-width: 650px;

  .title {
    margin-bottom: 16px;
  }  
`

export function Insights () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        Sorry, something went wrong. Please refresh the page to try again.
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div css={styles}>

        <div className='card'>
          <div className='text-center title'>
            <div className='bold'>Spend By Category</div>
            <div>(hover over chart to see values)</div>
          </div>
          <TxChart transactions={data.transactions} />
        </div>

        <br />
        <br />

        <div className='card'>
          <div className='text-center title'>
            <div className='bold'>Spend By Payment Type</div>
            <div>(hover over chart to see values)</div>
          </div>
          <PaymentChart transactions={data.transactions} />
        </div>

        <br />
        <br />

      </div>
    </Fragment>
  )
}
