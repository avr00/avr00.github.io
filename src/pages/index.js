import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t("Welcome to React")}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={() => changeLanguage("es")}>es</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
