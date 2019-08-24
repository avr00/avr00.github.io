import React from "react"
import { ExperienceCard as Card } from "./styles"

const ExperienceCard = ({ title, imgUrl, description, githubUrl, liveUrl }) => {
  return (
    <Card>
      <h5 className="title">{title}</h5>
      <div className="img-container">
        <img src={imgUrl} alt="wprd-inspector" />
      </div>
      <p className="description">{description}</p>
      <div className="line"></div>
      <div className="links">
        {githubUrl && (
          <div className="github">
            <a target="_blank" href={githubUrl}>
              Github
            </a>
          </div>
        )}
        <div className="live">
          <a target="_blank" href={liveUrl}>
            Live
          </a>
        </div>
      </div>
    </Card>
  )
}

export default ExperienceCard
