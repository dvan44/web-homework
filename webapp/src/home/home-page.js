import React, { Fragment } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import DeleteTransaction from '../gql/delete-transaction.gql'
import { TxTable } from '../components/transactions/TxTable'
import { Button } from '../components/button/Button'
import { any } from 'prop-types'
import { css } from '@emotion/core'

const styles = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;

  .title {
    font-weight: bold;
    font-size: 32px;
  }

  button {
    max-width: 200px;
  }
`

const pageStyles = css`
  padding: 0 32px;
`

export function Home (props) {
  // Graph operations
  const { loading, error, data = {} } = useQuery(GetTransactions)
  const [deleteTx] = useMutation(DeleteTransaction)

  // Click event handlers
  const handleEnterClicked = () => props.history.push('/enter')
  const deleteTxHandler = (id) => {
    if (window.confirm(`Are you sure you want to delete transaction ${id}`)) {
      deleteTx({ variables: { id } }).then(() => {
        // TODO: Replace this by refreshing the data via Apollo rather than full page reload
        window.location.reload()
      })
    }
  }
  const updateTxHandler = (id) => {
    props.history.push(`/update/${id}`)
  }

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
      <div css={pageStyles}>
        <div css={styles}>
          <div>
            <div className='title text-secondary'>Transactions</div>
          </div>
          <Button
            clickHandler={handleEnterClicked}
            color='primary'
            text='Add Transaction'
          />
        </div>
        <div className='card'>
          <TxTable
            data={data.transactions}
            deleteTxHandler={deleteTxHandler}
            updateTxHandler={updateTxHandler}
          />
        </div>
      </div>
    </Fragment>
  )
}

Home.propTypes = {
  history: any
}
