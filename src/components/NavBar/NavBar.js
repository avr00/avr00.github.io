import React, { Component } from "react";
import { translate } from "react-i18next";
import "../NavBar/NavBar.scss";
import { Link } from "react-scroll";

class NavBar extends Component {
  render() {
    const { t } = this.props;
    return (
      <nav id="nav" className="sticky">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}>
          About S
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}>
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="tech"
          spy={true}
          smooth={true}
          duration={500}>
          Technologies
        </Link>
        <a href="#">Resume</a>
        <a onClick={() => this.props.changeLanguage()}>{t(`EN`)}</a>
      </nav>
    );
  }
}

export default translate("translations")(NavBar);
