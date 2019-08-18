import React from "react"
import styled from "styled-components"
import winspector from "../images/word-inspector.png"
import ExperienceCard from "./experienceCard"
import { H1 } from "./styles"

const ExprienceWrapper = styled.section`
  max-width: 1280px;
  margin: 0px auto 300px auto;

  padding: 20px 20px 0 20px;
  .card-container {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    grid-gap: 60px;
  }

  h1 {
    margin: 100px 0;
  }

  @media only screen and (max-width: 1200px) {
    .card-container {
      grid-template-columns: 300px 300px;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0 20px;
    margin: 60px auto 60px auto;

    .card-container {
      padding: 0 20px;
      display: grid;
      grid-template-columns: 280px;
      grid-gap: 60px;
    }
  }
`

const Experience = () => {
  return (
    <ExprienceWrapper id="experience">
      <H1>Experience</H1>
      <div className="card-container">
        <ExperienceCard
          title="Word Inspector"
          description="Become a true inspector and find the hidden words in this game. Made
    with Unity3D, C# and Photoshop"
          imgUrl={winspector}
          liveUrl={
            "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
          }
        />
        <ExperienceCard
          title="Word Inspector"
          description="Become a true inspector and find the hidden words in this game. Made
    with Unity3D, C# and Photoshop"
          imgUrl={winspector}
          liveUrl={
            "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
          }
        />
        <ExperienceCard
          title="Word Inspector"
          description="Become a true inspector and find the hidden words in this game. Made
    with Unity3D, C# and Photoshop"
          imgUrl={winspector}
          liveUrl={
            "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
          }
        />
        <ExperienceCard
          title="Word Inspector"
          description="Become a true inspector and find the hidden words in this game. Made
    with Unity3D, C# and Photoshop"
          imgUrl={winspector}
          liveUrl={
            "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
          }
        />
        <ExperienceCard
          title="Word Inspector"
          description="Become a true inspector and find the hidden words in this game. Made
    with Unity3D, C# and Photoshop"
          imgUrl={winspector}
          liveUrl={
            "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
          }
        />
      </div>
    </ExprienceWrapper>
  )
}

export default Experience

//     <ExprienceWrapper>
//     <Card>asd</Card>
//     <Card>asd</Card>
//     <Card>asd</Card>
//     <Card>asd</Card>
//     <Card>sad</Card>
//   </ExprienceWrapper>
