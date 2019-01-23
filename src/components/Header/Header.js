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
        <h1 className="wow bounceIn">{t("Hey, I'm Aníbal!")}</h1>
        <h2 className="wow bounceIn">Full Stack Web Dev</h2>
        <h3 className="wow bounceIn">{t("looking")}</h3>
        <div className="icons wow bounceIn">
          <a href="https://github.com/avr00" target="_blank">
            <FontAwesomeIcon size="2x" color="white" icon={["fab", "github"]} />
          </a>
          <a href="https://www.linkedin.com/in/avr352634788/" target="_blank">
            <FontAwesomeIcon
              size="2x"
              color="white"
              icon={["fab", "linkedin"]}
            />
          </a>
          <a href="mailto:avrivadeneira1@gmail.com">
            <FontAwesomeIcon size="2x" color="white" icon={"envelope"} />
          </a>
        </div>
      </header>
    );
  }
}

export default translate("translations")(Header);
