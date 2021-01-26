import React from 'react'
import { css } from '@emotion/core'
import { Bar } from 'react-chartjs-2'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import { COLORS } from '../../theme/colors'

const styles = css`
`

const paymentTypes = ['Credit', 'Debit']

export function PaymentChart ({ transactions }) {
  const chartData = paymentTypes.map(type => {
    const credit = type === 'Credit'
    const filteredTxs = transactions.filter(tx => credit ? tx.credit : tx.debit)
    const typeSum = filteredTxs.reduce(
      (sum, tx) => sum + (tx.amount / 100),
      0
    )
    return typeSum.toFixed(2)
  })

  const data = {
    labels: paymentTypes,
    datasets: [{
      backgroundColor: [COLORS.primary, COLORS.secondary],
      data: chartData
    }]
  }

  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  return (
    <div css={styles}>
      <Bar data={data} options={options} />
    </div>
  )
}

PaymentChart.propTypes = {
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
