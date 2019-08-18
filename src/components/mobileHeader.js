import React, { useState } from "react"
import { slide as Menu } from "react-burger-menu"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import { Button } from "./styles"
import arrowRightIcon from "../images/arrow-right.svg"

import langEn from "../images/united-states.svg"
import langEs from "../images/spain.svg"
import moonIcon from "../images/moon.svg"
import sunIcon from "../images/sun.svg"

const MobileHeaderWrapper = styled.div`
  /* Position and sizing of burger button */
  height: 50px;
  background: ${props => props.theme.bg};
  /* position: fixed;
  top: 0;
  width: 100%;
  z-index: 10; */

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    display: none;
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    overflow: hidden !important;
    margin-top: 50px;
    background: ${props => props.theme.bg};
    padding: 10px 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    padding: 0;
    outline: none;
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.1) !important;
  }

  ul {
    list-style: none;
    margin: 0;
    .icon-menu-item {
      color: ${props => props.theme.secondary};
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;

      display: flex;
      /* justify-content: center; */
      align-items: center;
      img {
        margin-right: 5px;
      }
    }
    li {
      margin: 30px 0;
      .btn {
        width: 100%;
      }

      .menu-item {
        color: ${props => props.theme.secondary};
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-decoration: none;
      }
    }
  }
`

const HamburgerButton = styled.div`
  background: linear-gradient(to right, #0e3c89, #0e3c89) no-repeat;
  background-position: center left;
  background-size: 85% 4px;

  border: solid #0e3c89;
  border-width: 4px 0;
  position: absolute;
  margin-top: 13px;
  margin-left: 15px;
  z-index: 1200;

  height: 15px;
  width: 28px;
`

const MobileHeader = ({ isDark, setTheme }) => {
  const [open, setOpen] = useState(false)
  const { i18n } = useTranslation()

  const updateOpenState = state => {
    setOpen(state.isOpen)
  }

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }
  return (
    <MobileHeaderWrapper>
      <div className="hambuger-container">
        <HamburgerButton onClick={() => setOpen(!open)} />
      </div>
      <Menu
        isOpen={open}
        onStateChange={updateOpenState}
        customBurgerIcon={false}
        width={"100%"}
      >
        <ul>
          <li>
            <a className="menu-item" href="/">
              About
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Experience
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Technologies
            </a>
          </li>
          <li>
            <a className="menu-item" href="/">
              Resume
            </a>
          </li>
          <li>
            <Button className="btn" href="#contact">
              Get In Touch
              <img
                src={arrowRightIcon}
                style={{ marginLeft: 5 }}
                alt="language flag"
              />
            </Button>
          </li>
          <li className="icon-menu-item" onClick={changeLanguage}>
            <img
              src={i18n.language === "es" ? langEs : langEn}
              alt="language flag"
            />
            {i18n.language === "es" ? "Spanish" : "English"}
          </li>
          <li className="icon-menu-item" onClick={() => setTheme(!isDark)}>
            <img src={isDark ? moonIcon : sunIcon} alt="language flag" />
            {isDark ? "Dark Theme" : "Light Theme"}
          </li>
        </ul>
      </Menu>
    </MobileHeaderWrapper>
  )
}

export default MobileHeader
