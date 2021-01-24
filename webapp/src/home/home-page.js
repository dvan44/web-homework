import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
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
      <div css={pageStyles}>
        <div css={styles}>
          <div className='title'>Transactions</div>
          <Button
            clickHandler={handleEnterClicked}
            color='tertiary'
            text='Enter New Transaction'
          />
        </div>
        <TxTable data={data.transactions} />
      </div>
    </Fragment>
  )
}

Home.propTypes = {
  history: any
}
