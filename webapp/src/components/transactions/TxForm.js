import React, { useEffect } from 'react'
import { bool, func, number, shape, string } from 'prop-types'
import { css } from '@emotion/core'
import { Button } from '../button/Button'
import { COLORS } from '../../theme/colors'

const styles = css`
  width: 100%;

  .mt {
    margin-top: 16px;
  }

  .form-control-label {
    font-size: 14px;
    color: ${COLORS.primary};
  }

  .form-control-container {
    display: flex;
  }

  .form-control {
    border: 1px solid ${COLORS.primary};
    border-radius: 7px;
    padding: 16px;
    font-size: 18px;
    flex-grow: 1;

    &:focus {
      outline: none;
    }
  }

  select.form-control {
    width: 100%;
  }

  .btns-container {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    button {
      max-width: 47%;
    }
  }
`

export function TxForm ({ cancelHandler, submitHandler, tx = null }) {
  const amountInput = React.useRef(null)
  const descriptionInput = React.useRef(null)
  const typeInput = React.useRef(null)

  useEffect(() => {
    if (tx) {
      amountInput.current.value = (tx.amount / 100).toFixed(2)
      descriptionInput.current.value = tx.description
      typeInput.current.value = tx.credit ? 'Credit' : (tx.debit ? 'Debit' : '')
    }
  })

  const onSubmit = e => {
    e.preventDefault()
    submitHandler({
      ...tx,
      amount: Math.floor(amountInput.current.value * 100),
      credit: typeInput.current.value === 'Credit',
      debit: typeInput.current.value === 'Debit',
      description: descriptionInput.current.value,
      merchantId: '871b17b4-5dd8-11eb-ae93-0242ac130002',
      userId: '3464c182-5dd8-11eb-ae93-0242ac130002'
    })
  }

  return (
    <form css={styles} onSubmit={onSubmit}>

      <div>
        <label className='form-control-label'>
          Description
          <div className='form-control-container'>
            <input
              className='form-control'
              maxLength='50'
              placeholder='Description'
              ref={descriptionInput}
              required
              type='text'
            />
          </div>
        </label>
      </div>

      <div className='mt'>
        <label className='form-control-label'>
          Amount
          <div className='form-control-container'>
            <input
              className='form-control'
              pattern='^\d+\.\d{2}$'
              placeholder='0'
              ref={amountInput}
              required
              type='text'
            />
          </div>
        </label>
      </div>

      <div className='mt'>
        <label className='form-control-label'>
          Transaction Type
          <div>
            <select
              className='form-control'
              ref={typeInput}
              required
            >
              <option defaultValue disabled value=''>Transaction Type</option>
              <option value='Credit'>Credit</option>
              <option value='Debit'>Debit</option>
            </select>
          </div>
        </label>
      </div>

      <div className='btns-container'>
        <Button
          clickHandler={cancelHandler}
          color='grey'
          text='Cancel'
          type='button'
        />
        <Button
          color='secondary'
          text='Save'
          type='submit'
        />
      </div>
    </form>
  )
}

TxForm.propTypes = {
  cancelHandler: func,
  submitHandler: func,
  tx: shape({
    amount: number,
    credit: bool,
    debit: bool,
    description: string
  })
}
