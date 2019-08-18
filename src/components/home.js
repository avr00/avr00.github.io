import React from "react"
import { H1, SubText, Button } from "./styles"
import styled from "styled-components"
import Image from "./image"
import arrowRightIcon from "../images/arrow-right.svg"
import { useTranslation } from "react-i18next"

const HomeSection = styled.section`
  max-width: 1280px;
  height: 100vh;
  margin: 50px auto;
  /* padding: 120px 0; */
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;

  .image-container {
    max-width: 500px;
    margin: auto 0;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    height: 600px;

    .image-container {
      display: none;
    }
  }
`

const Home = () => {
  const { t } = useTranslation()
  return (
    <HomeSection id="home">
      <div className="home-info">
        <H1>{t("Hey I’m Anibal, Software Developer.")}</H1>
        <SubText>
          I love building products that users will love to interact with.
        </SubText>
        <Button href="#contact">
          Get In Touch
          <img
            src={arrowRightIcon}
            style={{ marginLeft: 5 }}
            alt="language flag"
          />
        </Button>
      </div>

      <div className="image-container">
        <Image />
      </div>
    </HomeSection>
  )
}

export default Home
