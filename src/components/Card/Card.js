import React, { Component } from "react";
import { translate } from "react-i18next";
import "./Card.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faDatabase);

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="card-description">
            <p>{this.props.description}</p>
          </div>
          <div className="card-technologies">
            <FontAwesomeIcon
              size="2x"
              color={this.props.colorIcon1}
              icon={this.props.icon1}
            />
            <FontAwesomeIcon
              size="2x"
              color={this.props.colorIcon2}
              icon={this.props.icon2}
            />
            <FontAwesomeIcon
              size="2x"
              color={this.props.colorIcon3}
              icon={this.props.icon3}
            />
          </div>
          <div className="card-links">
            <a href={this.props.github}>Github</a>
            <a href={this.props.live}>Live</a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Card);
