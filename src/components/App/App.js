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
    language: "en"
  };
  componentDidMount() {
    new WOW().init();
  }

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = lng => {
      if (this.state.language === "en") {
        this.setState({ language: "es" });
        i18n.changeLanguage("es");
      } else {
        this.setState({ language: "en" });
        i18n.changeLanguage("en");
      }
    };

    return (
      <div className="App ">
        <NavBar changeLanguage={changeLanguage} />
        <Header />
        <About />
        <Portfolio />
        <Technologies />
        <header className="App-header">
          <h1 className="wow bounceInUp">{t("Hello, I'm Mark")}</h1>
          <button onClick={() => changeLanguage("es")}>ES</button>
          <div>Asd AAAAA</div>
          <FontAwesomeIcon size="2x" color="#6DB65B" icon="igloo" />
        </header>
      </div>
    );
  }
}

export default translate("translations")(App);
