import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { Enter } from './enter'
import { Update } from './update'
import { COLORS } from './theme/colors'
import { Insights } from './insights'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li>
              <Link className='nav-link' to='/insights'>Insights</Link>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Insights} exact path='/insights' />
          <Route component={Enter} exact path='/enter' />
          <Route component={Update} path='/update/:id' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const navStyle = css`
  display: flex;
  background: ${COLORS.secondary};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 48px;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }

  .nav-link {
    color: white;
    text-decoration: none;

    &:hover {
      color: ${COLORS.primary};
    }
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
  margin-top: 54px;
`
