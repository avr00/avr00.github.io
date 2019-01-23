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
          <div className="card-image">
            <img src={this.props.img} />
          </div>
          <div className="card-description">
            <p>{this.props.description}</p>
          </div>
          <div className="card-links">
            <a href={this.props.github} target="_blank">
              Github
            </a>
            <a href={this.props.live} target="_blank">
              Live
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Card);
