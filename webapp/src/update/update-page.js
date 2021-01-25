import React, { Fragment } from 'react'
import { TxForm } from '../components/transactions/TxForm'
import { css } from '@emotion/core'
import { any } from 'prop-types'
import { useMutation, useQuery } from '@apollo/client'
import UpdateTransaction from '../gql/update-transaction.gql'
import GetTransactions from '../gql/transactions.gql'

const styles = css`
  margin: auto;
  width: 90%;
  max-width: 450px;
`

export function Update (props) {
  // Graph operations
  const { loading, error, data = {} } = useQuery(GetTransactions)
  const [updateTx] = useMutation(UpdateTransaction)

  const returnToHome = () => props.history.push('')

  const submitHandler = (transaction) => {
    updateTx({
      variables: { ...transaction }
    }).then(() => {
      returnToHome()
    })
  }

  const cancelHandler = () => {
    returnToHome()
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
        Sorry, something went wrong. Please refresh the page to try again.
      </Fragment>
    )
  }

  const pathnameParts = props.location.pathname.split('/')
  const txId = pathnameParts[pathnameParts.length - 1]
  const txToUpdate = data.transactions.find(tx => tx.id === txId)

  return (
    <Fragment>
      <div css={styles}>
        <TxForm
          cancelHandler={cancelHandler}
          submitHandler={submitHandler}
          tx={txToUpdate}
        />
      </div>
    </Fragment>
  )
}

Update.propTypes = {
  history: any,
  location: any
}
