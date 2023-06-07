import { Paper, Typography, Button } from "@mui/material";
import styled from "styled-components";
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
const BackgroundHome = styled.div`
  background: #1a1a2e;
  width: 100%;
  height: 700px;
  background-size: cover;
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
  height: 60%;
`;

const StylePaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 20px;
  gap: 20px;
  height: 60%;

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
`;

export default function About() {
  const tamañoIcon = "15vh";

  return (
    <div id="About">
      <BackgroundHome>
        <StyledPaper elevation={3}>
          <Typography variant="h4" component="h2">
            About me
          </Typography>
          <Typography variant="h6" component="h3">
            Front-end Developer / REACT
          </Typography>
          <Typography variant="body1">
            I am a front-end developer experienced in CSS3, HTML5, JavaScript,
            and React. I have project management background and experience with
            tools like GitHub and Trello. Additionally, I have knowledge in C++
            and Java. I am passionate about creating functional and visually
            appealing web interfaces while ensuring high standards of quality
            and ease of use.
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

        <StylePaper elevation={3}>
          <div>
            <Typography variant="h4" component="h2">
              Skills
            </Typography>
          </div>

          <section>
            <DiCss3 size={tamañoIcon} color="#264de4" />
            <DiGithubBadge size={tamañoIcon} color="#171515" />
            <DiHtml5 size={tamañoIcon} color=" #e34c26" />
            <DiJavascript1 size={tamañoIcon} color="#f0db4f" />
            <DiReact size={tamañoIcon} color="#61DBFB" />
            <DiTrello size={tamañoIcon} color="#0084D1" />
            <SiCplusplus size={tamañoIcon} color="#264de4" />
            <DiJava size={tamañoIcon} color="#f89820" />
            <SiMui size={tamañoIcon} color="#0084D1" />
            <DiNpm size={tamañoIcon} color="#CC3534" />
          </section>
        </StylePaper>
      </BackgroundHome>
    </div>
  );
}
