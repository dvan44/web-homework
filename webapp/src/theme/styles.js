import { css } from '@emotion/core'
import { COLORS } from './colors'

// Global styles
export const styles = css`
  * {
    color: ${COLORS.darkGray}
  }

  .text-primary {
    color: ${COLORS.primary};
  }

  .text-secondary {
    color: ${COLORS.secondary}
  }

  .text-white {
    color: ${COLORS.white};
  }

  .card {
    padding: 24px;
    border-radius: 10px;
    background ${COLORS.white};
    box-shadow: 0 5px 10px 2px ${COLORS.grey}
  }
`
