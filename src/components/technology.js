import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import { H1, TechCard, SubTextTwo } from "./styles"

const TechnologyWrapper = styled.section`
  max-width: 1280px;
  margin: 0px auto 0px auto;
  padding-top: 20px;
  .card-container {
    display: grid;
    grid-template-columns: 450px 450px;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    grid-gap: 60px;
  }

  h1 {
    margin-top: 100px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 20px;
    .card-container {
      grid-template-columns: 300px 300px;
    }
  }

  @media only screen and (max-width: 740px) {
    padding: 0 20px;

    .card-container {
      grid-template-columns: 100%;
    }
  }
`

const Technology = () => {
  const { t } = useTranslation()
  return (
    <TechnologyWrapper id="technology">
      <H1> {t("tech-title")}</H1>
      <SubTextTwo>{t("tech-recent")}</SubTextTwo>
      <div className="card-container">
        <TechCard>
          <h5 className="title">
            {t("frontend-tech")} <span className="line"></span>
          </h5>
          <ul>
            <li>React</li>
            <li>React Hooks</li>
            <li>Redux</li>
            <li>Responsive CSS3</li>
            <li>SaSS</li>
            <li>Styled Components</li>
            <li>Material UI</li>
            <li>JQuery</li>
            <li>Apollo GraphQL</li>
            <li>WordPress</li>
          </ul>
        </TechCard>
        <TechCard>
          <h5 className="title">
            {t("backend-tech")}s <span className="line"></span>
          </h5>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>MVC</li>
            <li>Apollo GraphQL Server</li>
            <li>RESTful APIs</li>
            <li>cPanel</li>
          </ul>
        </TechCard>
      </div>
    </TechnologyWrapper>
  )
}

export default Technology
