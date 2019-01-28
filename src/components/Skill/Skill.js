import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Skill.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faCode);

class Skill extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="skill-container">
        <div className="skill-content">
          <div className="icon">
            <FontAwesomeIcon size="4x" color="#374850" icon={"code"} />
          </div>
          <div className="title">
            <h4>{this.props.title}</h4>
          </div>
          <div className="skill-description">
            <p>{this.props.description}</p>
          </div>
          <div className="skills-title">
            <h5>{t("use")}</h5>
          </div>
          <div className="skills">
            <span>{this.props.skill1}</span>
            <span>{this.props.skill2}</span>
            <span>{this.props.skill3}</span>
            <span>{this.props.skill4} </span>
            <span>{this.props.skill5}</span>
            <span>{this.props.skill6}</span>
            <span>{this.props.skill7}</span>
            <span>{this.props.skill8}</span>
            <span>{this.props.skill9}</span>
            <span>{this.props.skill10}</span>
            <span>{this.props.skill11}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Skill);
