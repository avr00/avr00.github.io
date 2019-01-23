import React, { Component } from "react";
import { translate } from "react-i18next";
import "./About.scss";
import { Element } from "react-scroll";

class About extends Component {
  render() {
    const { t } = this.props;
    return (
      <Element id="about" className="wow slideInRight">
        <h2>{t("about")}</h2>
        <p>
          {t("who")}
          <br />
        </p>
      </Element>
    );
  }
}

export default translate("translations")(About);
