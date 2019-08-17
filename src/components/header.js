import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import langEn from "../images/united-states.svg"
import langEs from "../images/spain.svg"
import moonIcon from "../images/moon.svg"
import sunIcon from "../images/sun.svg"

const HeaderWrapper = styled.header`
  background: ${props => props.theme.bg};
  max-width: 1300px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    align-items: center;
    margin: 0;
    cursor: pointer;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    color: ${props => props.theme.primary};

    li {
      margin: 0 15px 0 15px;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`

const Header = ({ siteTitle, setTheme, isDark }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <a href="#about">About</a>{" "}
        </li>
        <li>Experience</li>
        <li>Technologies</li>
        <li>Resume</li>
        <li onClick={() => setTheme(!isDark)}>
          <img src={isDark ? moonIcon : sunIcon} alt="language flag" />
        </li>
        <li onClick={changeLanguage}>
          <img
            src={i18n.language === "es" ? langEs : langEn}
            alt="language flag"
          />
        </li>
      </ul>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
