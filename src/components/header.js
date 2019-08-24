import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import langEn from "../images/united-states.svg"
import langEs from "../images/spain.svg"
import moonIcon from "../images/moon.svg"
import sunIcon from "../images/sun.svg"

import resume_en from "../files/resume_en.pdf"
import resume_es from "../files/resume_es.pdf"

const HeaderWrapper = styled.header`
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  /* box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.22); */
  ${props =>
    props.isScrolling &&
    `box-shadow: ${props.theme.headerShadow} 0px 2px 8px 0px;`}
  /* box-shadow: none; */

  background: ${props => props.theme.bg};

  .container {
    height: 50px;
    max-width: 1300px;
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
      font-size: 15px;
      line-height: 28px;

      color: ${props => props.theme.primary};

      li {
        margin: 0 15px 0 15px;

        a {
          color: inherit;
          font-weight: bold;
          text-decoration: none;
        }

        &:hover {
          transition: color 0.3s;
          color: #0070f3;
        }
      }
    }
  }
`

const Header = ({ siteTitle, setTheme, isDark }) => {
  const [scrollYPosition, setScrollYPosition] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, 16)
    }

    return function cleanup() {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll, 16)
      }
    }
  }, [])

  const handleScroll = () => {
    // + is unary operator, same as Number(window.scrollY)
    if (typeof window !== "undefined") {
      const scrollPositionY = +window.scrollY
      setScrollYPosition(scrollPositionY)
    }
  }
  const { i18n, t } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }

  const resume = i18n.language === "es" ? resume_es : resume_en
  // eslint-disable-next-line
  const isScrolling = !!scrollYPosition
  return (
    <HeaderWrapper isScrolling={isScrolling}>
      <div className="container">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#technology">Technologies</a>
          </li>
          <li>
            <a href={resume} target="_blank">
              {t("resume-txt")}
            </a>
          </li>
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
      </div>
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
