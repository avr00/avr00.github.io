import React, { Component } from "react";
import { translate } from "react-i18next";
import "./About.scss";
import { Element } from "react-scroll";

class About extends Component {
  render() {
    const { t } = this.props;
    return (
      <Element id="about" className="wow slideInRight">
        <h2>About</h2>
        <p>
          {t(
            "Lorem ipsum dolor sit amet, an duis aeque impedit nam. Possit honestatis dissentiunt sea et, alterum invidunt periculis ea quo."
          )}
          <br />
          <br />
          Magna vulputate ex per. Integre numquam principes ex est, dico
          placerat torquatos eos ne, no eam dicant persius legimus. Ut error
          <br />
          <br />
          vidisse fuisset qui, movet indoctum in usu, quot salutatus gloriatur
          eam in. Ex sit probo tollit, an eam affert noluisse qualisque. Ferri
          putent tamquam duo ad, mel at lobortis salutandi, offendit definiebas
          no sit. Illum mazim no sit.
        </p>
      </Element>
    );
  }
}

export default translate("translations")(About);
