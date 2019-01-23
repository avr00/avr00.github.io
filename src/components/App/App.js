import React, { Component } from "react";
import WOW from "wow.js";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Technologies from "../Technologies/Technologies";
import Particle from "../Particles/Particle";
//import { Scrollbars } from "react-custom-scrollbars";

library.add(faIgloo);

class App extends Component {
  state = {
    language: "English"
  };
  componentDidMount() {
    new WOW().init();
  }

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      if (this.state.language === "English") {
        this.setState({ language: "Spanish" });
        i18n.changeLanguage("es");
      } else {
        this.setState({ language: "English" });
        i18n.changeLanguage("en");
      }
    };

    return (
      <div className="App ">
        <NavBar changeLanguage={changeLanguage} lng={this.state.language} />
        <Header />
        <About />
        <Portfolio />
        <Technologies />
      </div>
    );
  }
}

export default translate("translations")(App);
