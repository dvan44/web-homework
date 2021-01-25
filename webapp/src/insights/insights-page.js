import React, { Fragment } from 'react'
import { TxChart } from '../components/charts/TxChart'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'

const styles = css`
  margin: auto;
  width: 90%;
  max-width: 650px;
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
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div css={styles}>
        <div className='card'>
          <TxChart transactions={data.transactions} />
        </div>
      </div>
    </Fragment>
  )
}
