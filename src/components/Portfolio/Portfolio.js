import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Portfolio.scss";
import Card from "../Card/Card";
import { Element } from "react-scroll";
import headnews from "../../images/headnews.png";
import huddleLanding from "../../images/huddle-landing.png";
import notesAppMern from "../../images/notes-app-mern.png";
import passwordGenerator from "../../images/password-generator.png";

class Portfolio extends Component {
  render() {
    const { t } = this.props;
    return (
      <Element id="portfolio" className="wow slideInRight">
        <h1>Portfolio</h1>
        <div className="cards-container">
          <Card
            title={"Word Inspector"}
            description={t("wordinspector")}
            img={
              "https://avr00.github.io/my_portfolio/resources/img/Word%20Inspector.png"
            }
            live={
              "https://play.google.com/store/apps/details?id=com.westworldgames.wordinspector"
            }
          />
          <Card
            title={"Plane: Avoid Missiles"}
            description={t("planeapp")}
            img={
              "https://avr00.github.io/my_portfolio/resources/img/planeavoid.png"
            }
            live={
              "https://play.google.com/store/apps/details?id=com.WestWorldGames.pilotmissiles"
            }
          />
          <Card
            title={"Headnews"}
            description={t("headnews")}
            img={headnews}
            github={
              <a href={"https://github.com/avr00/headnews"} target="_blank">
                Github
              </a>
            }
            live={"https://jolly-hypatia-445f35.netlify.com/us/general"}
          />
          <Card
            title={"Notes"}
            description={t("notes")}
            img={notesAppMern}
            github={
              <a
                href={"https://github.com/avr00/Notes_Material"}
                target="_blank">
                Github
              </a>
            }
            live={"https://my-notes-mern.herokuapp.com/"}
          />
          <Card
            title={"Huddle"}
            description={t("huddle")}
            img={huddleLanding}
            github={
              <a
                href={"https://github.com/avr00/Notes_Material"}
                target="_blank">
                Github
              </a>
            }
            live={"https://sad-gates-eefc3a.netlify.com/"}
          />
          <Card
            title={"Password Generator"}
            description={t("reactPassword")}
            img={passwordGenerator}
            github={
              <a
                href={"https://github.com/avr00/passwordgenerator-react"}
                target="_blank">
                Github
              </a>
            }
            live={"https://festive-nightingale-d10ab1.netlify.com/"}
          />
        </div>
      </Element>
    );
  }
}

// icon={["fab", "react"]} />
//             <FontAwesomeIcon size="2x" color="black" icon={["fab", "node"]} />
//             <FontAwesomeIcon size="2x" color="black" icon="database" />

export default translate("translations")(Portfolio);
