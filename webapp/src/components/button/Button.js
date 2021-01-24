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
  font-size: 16px;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }

  &.primary {
    background: ${COLORS.primary};
  }
  &.secondary {
    background: ${COLORS.secondary};
  }
  &.tertiary {
    background: ${COLORS.tertiary};
  }
  &.danger {
    background: ${COLORS.danger};
  }
  &.grey {
    background: ${COLORS.grey}
  }
`

export function Button (props) {
  return (
    <button
      className={props.color}
      css={styles}
      onClick={props.clickHandler}
      type={props.type || 'button'}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  clickHandler: func,
  color: string,
  text: string,
  type: string
}
