/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import "../i18n"

import Header from "./header"
import {
  H1,
  SubText,
  Button,
  lightTheme,
  darkTheme,
  GlobalStyle,
} from "./styles"

const Wrapper = styled.div`
  background: ${props => props.theme.bg};
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const [isDark, setTheme] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          setTheme={setTheme}
          isDark={isDark}
        />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
