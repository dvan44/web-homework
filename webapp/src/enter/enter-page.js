import React from 'react'
import { TxForm } from '../components/transactions/TxForm'
import { css } from '@emotion/core'
import { any } from 'prop-types'
import { useMutation } from '@apollo/client'
import CreateTransaction from '../gql/create-transaction.gql'

const styles = css`
  margin: auto;
  width: 90%;
  max-width: 450px;
`

export function Enter (props) {
  const returnToHome = () => props.history.push('')

  // TODO: Remove after confirming the results are not needed
  // const [createTx, { data }] = useMutation(CreateTransaction)
  const [createTx] = useMutation(CreateTransaction)

  const submitHandler = (transaction) => {
    createTx({ variables: { ...transaction } }).then(() => {
      returnToHome()
    })
  }

  const cancelHandler = () => {
    returnToHome()
  }

  return (
    <div css={styles}>
      <TxForm
        cancelHandler={cancelHandler}
        submitHandler={submitHandler}
      />
    </div>
  )
}

Enter.propTypes = {
  history: any
}