import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Header.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Header.scss";

library.add(fab, faLanguage);

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <header id="header">
        <h1 className="wow bounceIn">{t("Hello, I'm Mark")}</h1>
        <h2 className="wow bounceIn">Full Stack Dev | Marketer</h2>
        <div className="icons wow bounceIn">
          <a href="#">
            <FontAwesomeIcon size="2x" color="white" icon={["fab", "github"]} />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="2x"
              color="white"
              icon={["fab", "twitter"]}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="2x"
              color="white"
              icon={["fab", "linkedin"]}
            />
          </a>
        </div>
      </header>
    );
  }
}

export default translate("translations")(Header);
