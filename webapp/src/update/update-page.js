import React from 'react'
import { TxForm } from '../components/transactions/TxForm'
import { css } from '@emotion/core'
import { any } from 'prop-types'
import { useMutation } from '@apollo/client'
import UpdateTransaction from '../gql/update-transaction.gql'

const styles = css`
  margin: auto;
  width: 90%;
  max-width: 450px;
`

export function Update (props) {
  const returnToHome = () => props.history.push('')

  const [updateTx] = useMutation(UpdateTransaction)

  const submitHandler = (transaction) => {
    updateTx({
      variables: { ...transaction } // TODO: Add id of tx being update
    }).then(() => {
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

Update.propTypes = {
  history: any
}
