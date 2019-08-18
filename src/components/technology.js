import React from "react"
import styled from "styled-components"
import { H1, TechCard } from "./styles"

const TechnologyWrapper = styled.section`
  max-width: 1280px;
  margin: 300px auto 0px auto;
  .card-container {
    display: grid;
    grid-template-columns: 450px 450px;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    grid-gap: 60px;
  }

  h1 {
    margin: 100px 0;
  }
`

const Technology = () => {
  return (
    <TechnologyWrapper>
      <H1>Technologies</H1>
      <div className="card-container">
        <TechCard>
          <h5 className="title">
            Front-End Technologies <span className="line"></span>
          </h5>
          <ul>
            <li>React</li>
            <li>React Hooks</li>
            <li>Redux</li>
            <li>Responsive CSS3</li>
            <li>SaSS</li>
            <li>Styled Components</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Query</li>
          </ul>
        </TechCard>
        <TechCard>
          <h5 className="title">
            Backend Technologies <span className="line"></span>
          </h5>
        </TechCard>
      </div>
    </TechnologyWrapper>
  )
}

export default Technology
