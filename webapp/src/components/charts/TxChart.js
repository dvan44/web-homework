import React from 'react'
import { css } from '@emotion/core'
import { Doughnut } from 'react-chartjs-2'
import { TxType, txTypeToColor } from '../transactions/transaction-type'
import { arrayOf, bool, number, shape, string } from 'prop-types'

const styles = css`
`

const txTypes = Object.values(TxType)

export function TxChart ({ transactions }) {
  const chartData = txTypes.map(type => {
    const filteredTxs = transactions.filter(tx => tx.description === type)
    const typeSum = filteredTxs.reduce(
      (sum, tx) => sum + tx.amount,
      0
    )
    return typeSum.toFixed(2)
  })

  const data = {
    labels: Object.values(TxType),
    datasets: [{
      backgroundColor: txTypes.map(type => txTypeToColor(type)),
      data: chartData
    }]
  }

  const options = {
    legend: {
      position: 'right'
    }
  }

  return (
    <div css={styles}>
      <Doughnut data={data} options={options} />
    </div>
  )
}

TxChart.propTypes = {
  transactions: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
