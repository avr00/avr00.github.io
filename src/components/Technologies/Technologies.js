import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Technologies.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Skill from "../Skill/Skill";
import { Element, animateScroll as scroll } from "react-scroll";

library.add(fab, faDatabase, faAngleUp);

class Technologies extends Component {
  render() {
    const { t } = this.props;
    return (
      <Element id="tech" className="wow slideInRight">
        <h1>Technologies</h1>
        <div className="skills-container">
          <Skill
            title={"Front-end Technologies"}
            description={t("frontend")}
            skill1={"React"}
            skill2={"React Hooks"}
            skill3={"Redux"}
            skill4={"Responsive CSS3"}
            skill5={"SaSS"}
            skill6={"jQuery"}
            skill7={"Bootstrap"}
            skill8={"Material UI"}
          />
          <Skill
            title={"Back-end Technologies"}
            description={t("backend")}
            skill1={"NodeJS"}
            skill2={"expressJS"}
            skill3={"mongoDB"}
            skill4={"mongoose"}
            skill5={"MVC"}
          />
        </div>
        <div
          onClick={() => scroll.scrollToTop()}
          className="scroll-top animated infinite bounce delay-2s">
          <FontAwesomeIcon size="3x" color="white" icon={"angle-up"} />
          <span>To Top!</span>
        </div>
      </Element>
    );
  }
}

export default translate("translations")(Technologies);
