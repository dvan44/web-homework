import React, { useState } from 'react'
import { func } from 'prop-types'
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

export function TxForm ({ cancelHandler, submitHandler }) {
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()
  const [type, setType] = useState()

  const onSubmit = e => {
    e.preventDefault()
    submitHandler({
      amount: Math.floor(amount * 100),
      credit: type === 'Credit',
      debit: type === 'Debit',
      description,
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
              onChange={e => setDescription(e.target.value)}
              placeholder='Description'
              required
              type='text'
              value={description}
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
              onChange={e => setAmount(e.target.value)}
              pattern='^\d+\.\d{2}$'
              placeholder='0'
              required
              type='text'
              value={amount}
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
              onBlur={e => setType(e.target.value)}
              value={type}
            >
              <option>Credit</option>
              <option>Debit</option>
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
  submitHandler: func
}
