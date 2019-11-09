import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Experience from "../components/experience"
import Technology from "../components/technology"
import Contact from "../components/contact"
import favicon from "../images/favicon.png"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <SEO title="Home" />
      <Home />
      <About />
      <Experience />
      <Technology />
      <Contact />
    </Layout>
  )
}

export default IndexPage
