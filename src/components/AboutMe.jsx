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

export const BackgroundAbout = styled.div`
  background: #1a1a2e;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 20px;
  gap: 20px;
  height: 400px;
  border: 0.1px solid #23237d;
`;

const StylePaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 20px;
  gap: 20px;
  height: 400px;
  border: 0.1px solid #23237d;

  > section {
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
`;

export default function About() {
  const tamañoIcon = "15vh";

  return (
    <BackgroundAbout id="About">
      <StyledPaper
        elevation={3}
        style={{ backgroundColor: "#1c1c36", color: "white" }}
      >
        <Typography variant="h4" component="h2">
          About me
        </Typography>
        <Typography variant="h6" component="h3">
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
          href="#Home"
          size="large"
          variant="contained"
        >
          Download CV
        </StyledButton>
      </StyledPaper>

      <StylePaper
        elevation={3}
        style={{ backgroundColor: "#1c1c36", color: "white" }}
      >
        <div>
          <Typography variant="h4" component="h2">
            Skills
          </Typography>
        </div>

        <section>
          <DiCss3 size={tamañoIcon} color="#264de4" />
          <DiGithubBadge size={tamañoIcon} color="#171515" />
          <DiHtml5 size={tamañoIcon} color="#e34c26" />
          <DiJavascript1 size={tamañoIcon} color="#f0db4f" />
          <DiReact size={tamañoIcon} color="#61DBFB" />
          <DiTrello size={tamañoIcon} color="#0084D1" />
          <SiCplusplus size={tamañoIcon} color="#264de4" />
          <DiJava size={tamañoIcon} color="#f89820" />
          <SiMui size={tamañoIcon} color="#0084D1" />
          <DiNpm size={tamañoIcon} color="#CC3534" />
        </section>
      </StylePaper>
    </BackgroundAbout>
  );
}
