import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"
import Experience from "../components/experience"
import Technology from "../components/technology"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
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
