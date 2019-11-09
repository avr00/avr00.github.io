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

import useLocalStorage from "../hooks/useLocalStorage"

import Header from "./header"
import { lightTheme, darkTheme, GlobalStyle } from "./styles"
import MobileHeader from "./mobileHeader"
import useMedia from "../hooks/useMedia"

const Wrapper = styled.div`
  scroll-behavior: smooth;
  background: ${props => props.theme.bg};
  margin: 0 auto;

  footer {
    font-family: Roboto;
    color: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: ${props => props.theme.primary};
      margin-left: 5px;
    }
  }
`

const Layout = ({ children }) => {
  const [isDark, setTheme] = useLocalStorage("isDark", "false")
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const match =
    typeof window !== `undefined` ? useMedia("(max-width: 900px) ") : null

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
        <GlobalStyle isMobileMenuOpen={isMobileMenuOpen} />
        {match ? (
          <MobileHeader
            isDark={isDark}
            setTheme={setTheme}
            open={isMobileMenuOpen}
            setOpen={setMobileMenuOpen}
          />
        ) : (
          <Header
            siteTitle={data.site.siteMetadata.title}
            setTheme={setTheme}
            isDark={isDark}
          />
        )}

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
        </footer>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
