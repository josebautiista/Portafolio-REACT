import styled from "styled-components";
import { Paper, Typography, Button } from "@mui/material";
import {
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiTrello,
  DiJava,
  DiNpm,
} from "react-icons/di";
import { SiCplusplus, SiMui } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const BackgroundAbout = styled.section`
  background: #1a1a2e;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 130px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 20px;
  gap: 20px;
  height: 400px;
  border: 1px solid #23237d;
  box-sizing: border-box;

  &:hover {
    background-color: #292947;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const StylePaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 20px;
  gap: 20px;
  height: 400px;
  border: 1px solid #23237d;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 90%;
  }
  &:hover {
    background-color: #292947;
  }

  > span {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const StyledButton = styled(Button)`
  width: 50%;
  background-color: #1a1a2e;
  color: white;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

function About({ isMobile }) {
  const tamañoIcon = "5rem";
  const tamañoIconMobile = "65px";
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BackgroundAbout id="About">
      <StyledPaper
        data-aos="fade-right"
        elevation={3}
        sx={{
          backgroundColor: "#1c1c36",
          color: "white",
          transition: "0.5s all",
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"} component="h2">
          About me
        </Typography>
        <Typography variant={isMobile ? "h7" : "h6"} component="h3">
          Front-end Developer / REACT
        </Typography>
        <Typography variant="body1">
          Hello, I am a front-end developer experienced in CSS3, HTML5,
          JavaScript, and React. I have a project management background and
          experience with tools like GitHub and Trello. Additionally, I have
          knowledge in C++ and Java. I am passionate about creating functional
          and visually appealing web interfaces while ensuring high standards of
          quality and ease of use.
        </Typography>
        <StyledButton
          color="primary"
          href="./Hoja-De-Vida.pdf"
          download
          size="large"
          variant="contained"
        >
          Download CV
        </StyledButton>
      </StyledPaper>

      <StylePaper
        data-aos="fade-left"
        elevation={3}
        sx={{
          backgroundColor: "#1c1c36",
          color: "white",
          transition: "0.5s all",
        }}
      >
        <div>
          <Typography variant="h4" component="h2">
            Skills
          </Typography>
        </div>

        <span>
          <DiCss3
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#264de4"
          />
          <DiGithubBadge
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#171515"
          />
          <DiHtml5
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#e34c26"
          />
          <DiJavascript1
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#f0db4f"
          />
          <DiReact
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#61DBFB"
          />
          <DiTrello
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#0084D1"
          />
          <SiCplusplus
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#264de4"
          />
          <DiJava
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#f89820"
          />
          <SiMui
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#0084D1"
          />
          <DiNpm
            size={isMobile ? tamañoIconMobile : tamañoIcon}
            color="#CC3534"
          />
        </span>
      </StylePaper>
    </BackgroundAbout>
  );
}

About.propTypes = {
  isMobile: PropTypes.bool,
};

export default About;
