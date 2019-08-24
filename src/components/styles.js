import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${props => props.theme.bg};
    overflow:  ${props => (props.isMobileMenuOpen ? "hidden" : "auto")};
  }
`

export const lightTheme = {
  primary: "#000000",
  bg: "white",
  secondary: "#5E5A6B",
  headerShadow: "rgba(0, 0, 0, 0.05)",
}

export const darkTheme = {
  primary: "#EEEEEE",
  bg: "#292929",
  secondary: "#EEEEEE",
  headerShadow: "rgba(255, 255, 255, 0.05)",
}

export const H1 = styled.h1`
  margin: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  color: ${props => props.theme.primary};

  @media only screen and (max-width: 800px) {
    font-size: 48px;
    line-height: 56px;
  }
`

export const SubText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  color: ${props => props.theme.secondary};
  @media only screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 24px;
  }
`

export const SubTextTwo = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.theme.primary};
  margin-bottom: 100px;
`

export const AboutMeText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 188%;
  width: 450px;

  color: ${props => props.theme.secondary};
  @media only screen and (max-width: 500px) {
    width: auto;
  }
`

export const Button = styled.a`
  text-decoration: none;

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

export const ExperienceCard = styled.div`
  padding: 25px;
  border-radius: 20px;
  height: 400px;
  background: linear-gradient(135deg, #ff57b9 0%, #a704fd 100%);
  /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translate(0, -3px);
  }

  .title {
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 42px;

    color: #eeeeee;
  }

  .img-container {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    img {
      height: auto;
      width: 100%;
    }
  }

  .description {
    margin: 15px 0px;
    height: 200px;

    font-family: Roboto;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #eeeeee;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.15);
    margin-top: 8px;
  }

  .links {
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 21px;
    margin-top: 15px;
    margin-bottom: 20px;

    a {
      text-decoration: none;
      color: #eeeeee;
    }

    display: flex;
    justify-content: space-around;
  }
`

export const TechCard = styled.div`
  border-radius: 20px;
  height: 550px;
  width: 100%;
  background: ${props => props.theme.bg};
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3), 0 0px 33px rgba(0, 0, 0, 0.22);

  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translate(0, -3px);
  }
  color: ${props => props.theme.primary};

  .title {
    margin: 15px 0px 0px 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 42px;
    .line {
      margin-top: 15px;
      display: block;
      width: 60px;
      height: 4px;
      background: #0070f3;
    }
  }

  ul {
    height: 100%;
    margin-left: 10px;
    display: fleX;
    flex-direction: column;
    justify-content: space-around;

    li {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .title {
      font-size: 20px;
    }
  }
`
