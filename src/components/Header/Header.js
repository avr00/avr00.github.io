import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Header.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Header.scss";

library.add(fab, faLanguage, faEnvelope);

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <header id="header">
        <h1 className="wow bounceIn">{t("Hello, I'm Mark")}</h1>
        <h2 className="wow bounceIn">Full Stack Dev | Marketer</h2>
        <div className="icons wow bounceIn">
          <a href="https://github.com" target="_blank">
            <FontAwesomeIcon size="2x" color="white" icon={["fab", "github"]} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon
              size="2x"
              color="white"
              icon={["fab", "twitter"]}
            />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon
              size="2x"
              color="white"
              icon={["fab", "linkedin"]}
            />
          </a>
          <a href="mailto:whatever@gmail.com">
            <FontAwesomeIcon size="2x" color="white" icon={"envelope"} />
          </a>
        </div>
      </header>
    );
  }
}

export default translate("translations")(Header);
