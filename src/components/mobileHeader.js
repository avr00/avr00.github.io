import React from "react"
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

  ${props => props.open && "position: sticky; top: 0; left: 0;"}

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
      cursor: pointer;
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
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  z-index: 1200;

  span {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 25px;
    background: ${props => props.theme.primary};
    position: absolute;
    display: block;
    content: "";

    background-color: ${props =>
      props.open ? "transparent" : props.theme.primary};

    &:after,
    &:before {
      transition: all 300ms ease-in-out;
      ${props => props.open && "top: 0;"}

      cursor: pointer;
      border-radius: 1px;
      height: 3px;
      width: 25px;
      background: ${props => props.theme.primary};
      position: absolute;
      display: block;
      content: "";
    }

    &:before {
      top: ${props => (props.open ? "0;" : "-10px;")};
      width: 35px;
      transform: ${props => (props.open ? "rotate(45deg);" : "rotate(0deg);")};
    }
    &:after {
      bottom: -10px;
      width: 35px;
      transform: ${props => (props.open ? "rotate(-45deg);" : "rotate(0deg);")};
    }
  }
`

const MobileHeader = ({ isDark, setTheme, open, setOpen }) => {
  const { i18n } = useTranslation()

  const updateOpenState = state => {
    setOpen(state.isOpen)
  }

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }
  return (
    <MobileHeaderWrapper open={open}>
      <div className="hambuger-container">
        <HamburgerButton open={open} onClick={() => setOpen(!open)}>
          <span />
        </HamburgerButton>
      </div>
      <Menu
        right
        isOpen={open}
        onStateChange={updateOpenState}
        customBurgerIcon={false}
        width={"100%"}
      >
        <ul>
          <li>
            <a
              className="menu-item"
              href="#about"
              onClick={() => setOpen(!open)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#experience"
              onClick={() => setOpen(!open)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#technology"
              onClick={() => setOpen(!open)}
            >
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
