import React, { Component } from "react";
import { translate } from "react-i18next";
import "../NavBar/NavBar.scss";
import { Link } from "react-scroll";
import HamburgerMenu from "react-hamburger-menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faLanguage);

class NavBar extends Component {
  state = {
    open: false
  };

  handleHamburger = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { t } = this.props;
    return (
      <nav id="nav">
        <div className="hamburger">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={() => this.setState({ open: !this.state.open })}
            width={35}
            height={35}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div
          className={`navbar-links ${
            this.state.open ? "active animated fadeInDown faster" : ""
          }`}
          id="links">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}>
            {t("about")}
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}>
            {t("portfolio")}
          </Link>
          <Link
            activeClass="active"
            to="tech"
            spy={true}
            smooth={true}
            duration={500}>
            {t("technologies")}
          </Link>
          <a href="#"> {t("resume")}</a>
          <a className="lng" onClick={() => this.props.changeLanguage()}>
            {t("LANGUAGE")}
          </a>
        </div>
      </nav>
    );
  }
}

export default translate("translations")(NavBar);
