import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import ExperienceCard from "./experienceCard"
import { H1 } from "./styles"

import headnews from "../images/project-images/headnews.png"
import huddle from "../images/project-images/huddle.png"
import password_generator from "../images/project-images/password_generator.png"
import slicknotes from "../images/project-images/slicknotes.png"
import theinside from "../images/project-images/theinside.png"
import word_inspector from "../images/project-images/word-inspector.png"

// import notesapp from "../images/project-images/notesapp.png"
// import plane_app from "../images/project-images/plane_app.png"

const ExprienceWrapper = styled.section`
  max-width: 1280px;
  margin: 0px auto 100px auto;

  padding: 20px 20px 0 20px;
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    grid-gap: 60px;
  }

  h1 {
    margin: 100px 0;
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      margin: 20px 0;
    }
    .card-container {
      grid-template-columns: 300px 300px;
    }
  }

  @media only screen and (max-width: 800px) {
    padding-top: 60px auto;

    .card-container {
      padding: 0 20px;
      display: grid;
      grid-template-columns: 280px;
      grid-gap: 60px;
    }
  }
`

const Experience = () => {
  const { t } = useTranslation()
  return (
    <ExprienceWrapper id="experience">
      <H1>{t("exprience-title")}</H1>
      <div className="card-container">
        <ExperienceCard
          title="The Inside"
          description={t("exp-card-the-inside")}
          imgUrl={theinside}
          liveUrl={"https://www.theinside.com/"}
        />
        <ExperienceCard
          title="Slick Notes"
          description={t("exp-card-slicknotes")}
          imgUrl={slicknotes}
          liveUrl={"https://expo.io/@avr00/slick-notes"}
          githubUrl="https://github.com/avr00/Slick-Notes"
        />
        <ExperienceCard
          title="Android Games"
          description={t("exp-card-android-games")}
          imgUrl={word_inspector}
          liveUrl={"https://play.google.com/store/apps/developer?id=West+World"}
        />
        <ExperienceCard
          title="Headnews"
          description={t("exp-card-headnews")}
          imgUrl={headnews}
          liveUrl={"https://jolly-hypatia-445f35.netlify.com/us/general"}
          githubUrl="https://github.com/avr00/headnews"
        />
        <ExperienceCard
          title="Huddle"
          description={t("exp-card-huddle")}
          imgUrl={huddle}
          liveUrl={"https://sad-gates-eefc3a.netlify.com/"}
          githubUrl="https://github.com/avr00/huddle-landing-page"
        />
        {/* <ExperienceCard
          title="Notes"
          description="Save your notes in the cloud safely, I created a RESTful API that connects to a React App, I made this app using the MERN Stack and the MVC Pattern"
          imgUrl={notesapp}
          liveUrl={
            "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
          }
        /> */}
        <ExperienceCard
          title="Password Generator"
          description={t("exp-card-password-generator")}
          imgUrl={password_generator}
          liveUrl={"https://festive-nightingale-d10ab1.netlify.com/"}
          githubUrl="https://github.com/avr00/passwordgenerator-react"
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
