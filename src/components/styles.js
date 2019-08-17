import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
    }
`

export const lightTheme = {
  primary: "#000000",
  bg: "white",
  secondary: "#5E5A6B",
}

export const darkTheme = {
  primary: "#EEEEEE",
  bg: "#292929",
  secondary: "#EEEEEE",
}

export const H1 = styled.h1`
  margin: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  color: ${props => props.theme.primary};
`

export const SubText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  color: ${props => props.theme.secondary};
`

export const AboutMeText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 188%;
  width: 450px;

  color: ${props => props.theme.secondary};
`

export const Button = styled.div`
  transition: all 0.3s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-family: Roboto;
  width: 220px;
  height: 50px;
  background: #0070f3;
  border-radius: 10px;
  color: white;

  &:hover {
    transform: translate(0, 3px);
    opacity: 0.9;
  }
`
