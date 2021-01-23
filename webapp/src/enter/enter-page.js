import React from 'react'
import { TxForm } from '../components/transactions/TxForm'
import { css } from '@emotion/core'
import { any } from 'prop-types'

const styles = css`
  margin: auto;
  width: 60%;
`

export function Enter (props) {
  const submitHandler = (state) => {
    console.log(state)
    props.history.push('')
  }

  const cancelHandler = () => {
    props.history.push('')
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
