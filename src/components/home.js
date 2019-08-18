import React from "react"
import { H1, SubText, Button } from "./styles"
import styled from "styled-components"
import Image from "./image"
import arrowRightIcon from "../images/arrow-right.svg"
import { useTranslation } from "react-i18next"

const HomeSection = styled.section`
  max-width: 1280px;
  margin: 50px auto;
  padding: 120px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .image-container {
    max-width: 500px;
    margin: auto 0;
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
