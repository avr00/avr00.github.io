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
import "./layout.css"
import { H1 } from "./styles"

const lightTheme = {
  primary: "red",
  bg: "white",
}

const darkTheme = {
  primary: "blue",
  bg: "#292929",
}

const Text = styled.p`
  color: ${props => props.theme.text};
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <button onClick={() => setTheme(!isDark)}>change theme</button>
          <H1>Hey I’m Anibal, Software Developer.</H1>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
