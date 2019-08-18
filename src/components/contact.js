import React from "react"
import styled from "styled-components"
import { GithubIcon, EmailIcon } from "./svg"

const ContactWrapper = styled.section`
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
      text-decoration: none;
      align-items: center;
      p {
        margin: 0;
        text-align: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 42px;
        color: ${props => props.theme.primary};
      }
    }
  }
`

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <div className="container">
        <a
          target="_blank"
          href="https://github.com/avr00"
          className="contact github"
        >
          <GithubIcon />
          <p target="_blank" href="https://github.com/avr00">
            github.com<b>/avr00</b>
          </p>
        </a>
        <a
          target="_blank"
          href="email:avrivadeneira1@gmail.com"
          className="contact email"
        >
          <EmailIcon />
          <p target="_blank" href="email:avrivadeneira1@gmail.com">
            <b>avrivadeneira1</b>@gmail.com
          </p>
        </a>
      </div>
    </ContactWrapper>
  )
}

export default Contact
