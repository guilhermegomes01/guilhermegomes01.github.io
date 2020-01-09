import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link";

import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'
import * as S from './styled'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      {/* <TransitionPortal level="top"> */}
        <Sidebar />
      {/* </TransitionPortal> */}
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
