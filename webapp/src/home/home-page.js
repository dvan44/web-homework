import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { Button } from '../components/button/Button'
import { any } from 'prop-types'

export function Home (props) {
  const { loading, error, data = {} } = useQuery(GetTransactions)
  const handleEnterClicked = () => props.history.push('/enter')

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
      <Button
        clickHandler={handleEnterClicked}
        text='Enter New Transaction'
        type='secondary'
      />
      <TxTable data={data.transactions} />
    </Fragment>
  )
}

Home.propTypes = {
  history: any
}
