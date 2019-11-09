import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

import { H1, AboutMeText } from "./styles"

const AboutWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto 100px auto;
  padding-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .image-container {
    max-width: 400px;
    margin: auto 100px auto auto;
  }

  .about-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 60px auto 60px auto;
    .image-container {
      display: none;
    }

    .about-me {
      margin-top: 60px;
    }
  }
`

const About = () => {
  const data = useStaticQuery(ABOUT_IMAGE)
  const { t } = useTranslation()

  return (
    <AboutWrapper id="about">
      <div>
        <div className="image-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </div>
      <div className="about-me">
        <H1>{t("about-me")}</H1>
        <AboutMeText>{t("about-me-desc")}</AboutMeText>
      </div>
    </AboutWrapper>
  )
}

const ABOUT_IMAGE = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
