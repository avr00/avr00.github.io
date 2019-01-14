import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Portfolio.scss";
import Card from "../Card/Card";
import { Element } from "react-scroll";

class Portfolio extends Component {
  render() {
    const { t } = this.props;
    return (
      <Element id="portfolio" className="wow slideInRight">
        <h1>Portfolio</h1>
        <div className="cards-container">
          <Card
            title={"Notes"}
            description={t(
              "Take notes with this app fully backed by mongoDB and Node"
            )}
            icon1={["fab", "node"]}
            icon2={["fab", "react"]}
            icon3={"database"}
            github={"#"}
            live={"#"}
          />
          <Card
            title={"Notes"}
            description={
              "Take notes with this app fully backed by mongoDB and Node"
            }
            icon1={["fab", "node"]}
            icon2={["fab", "react"]}
            icon3={"database"}
            github={"#"}
            live={"#"}
          />
          <Card
            title={"Notes"}
            description={
              "Take notes with this app fully backed by mongoDB and Node"
            }
            icon1={["fab", "node"]}
            icon2={["fab", "react"]}
            icon3={"database"}
            github={"#"}
            live={"#"}
          />
          <Card
            title={"Notes"}
            description={
              "Take notes with this app fully backed by mongoDB and Node"
            }
            icon1={["fab", "node"]}
            icon2={["fab", "react"]}
            icon3={"database"}
            github={"#"}
            live={"#"}
          />
          <Card
            title={"Notes"}
            description={
              "Take notes with this app fully backed by mongoDB and Node"
            }
            icon1={["fab", "node"]}
            icon2={["fab", "react"]}
            icon3={"database"}
            github={"#"}
            live={"#"}
          />
          <Card
            title={"Notes"}
            description={
              "Take notes with this app fully backed by mongoDB and Node"
            }
            icon1={["fab", "node"]}
            icon2={["fab", "react"]}
            icon3={"database"}
            github={"#"}
            live={"#"}
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
