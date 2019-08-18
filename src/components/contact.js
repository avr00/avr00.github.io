import React from "react"
import styled from "styled-components"
import githubIcon from "../images/github.svg"
import emailIcon from "../images/email.svg"

const ContactWrapper = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.15);
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  margin-top: -20px;

  .container {
    height: 300px;
    max-width: 1280px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .github {
      border-right: 2px solid rgba(0, 0, 0, 0.15);
    }
    .contact {
      display: flex;
      flex-direction: column;
      a {
        text-align: center;
        text-decoration: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 42px;
        color: ${props => props.theme.primary};
      }
    }
  }
`

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <div className="contact github">
          <img src={githubIcon} alt="language flag" />
          <a href="www.github.com/avr00">github.com/avr00</a>
        </div>
        <div className="contact email">
          <img src={emailIcon} alt="language flag" />
          <a href="email:avrivadeneira1@gmail.com">avrivadeneira1@gmail.com</a>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default Contact
