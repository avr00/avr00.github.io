import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/home"
import About from "../components/about"

const IndexPage = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      <About />
    </Layout>
  )
}

export default IndexPage
