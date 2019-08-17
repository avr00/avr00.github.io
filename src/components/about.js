import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { H1, AboutMeText, Button } from "./styles"
import Image from "./image"

const AboutWrapper = styled.section`
  max-width: 1280px;
  margin: 300px auto;
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
`

const About = () => {
  const data = useStaticQuery(ABOUT_IMAGE)

  return (
    <AboutWrapper id="about">
      <div>
        <div className="image-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </div>
      <div className="about-me">
        <H1>About Me</H1>
        <AboutMeText>
          Since I knew the power of software I knew this is what I wanted to do,
          I have worked with several clients remotely and love creating digital
          products that escale. In my spare time I love doing sports such as
          calisthenics, being outdoor, and learning about tech!
        </AboutMeText>
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