import React from 'react'
import { func, string } from 'prop-types'
import { css } from '@emotion/core'
import { COLORS } from '../../theme/colors'

const styles = css`
  border-radius: 7px;
  color: white;
  background: #00a2ff;
  outline: none;
  padding: 8px 16px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.primary {
    background: ${COLORS.primary};
  }
  &.secondary {
    background: ${COLORS.secondary};
  }
  &.danger {
    background: ${COLORS.danger};
  }
`

export function Button (props) {
  return (
    <button
      className={props.type}
      css={styles}
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  clickHandler: func,
  text: string,
  type: string
}
