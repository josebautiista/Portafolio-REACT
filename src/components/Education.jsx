import { styled } from "styled-components";
import { Typography, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiJava,
  DiMysql,
} from "react-icons/di";
import { SiCplusplus, SiJest } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const BackgroundEducation = styled.section`
  background: #1a1a2e;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 120px 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled.div`
  background-color: transparent;
  width: 250px;
  height: 400px;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  font-family: sans-serif;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${StyledCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #464680;
  border-radius: 1rem;
  background: transparent;
  color: white;
`;

const CardBack = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #464680;
  border-radius: 1rem;
  background: transparent;
  color: white;
  transform: rotateY(180deg);
  box-sizing: border-box;
  padding: 30px;
  ${StyledCard}:hover & {
    border: 1px solid #7d7dd1;
  }
`;

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  const cardsEducation = [
    {
      institucion: "Udemy",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      titulo: "React: From zero to expert",
      fecha: "February 2023 - May 2023",
      skills: "Hooks, JEST, React Testing Library",
      logos: [
        <DiReact key="react-icon" size={"100px"} color="#61DBFB" />,
        <SiJest size={"70px"} color="#c63c14" key="react-icon" />,
      ],
    },
    {
      institucion: "ORACLE Next Education",
      logo: "./one.png",
      titulo: "React front-end developer",
      fecha: "November 2022 - June 2023",
      skills: "Agile, Soft Skills, JavaScript, HTML, CSS, React",
      logos: [
        <DiCss3 size={"80px"} color="#264de4" key="react-icon" />,
        <DiHtml5 size={"80px"} color=" #e34c26" key="react-icon" />,
        <DiJavascript1 size={"80px"} color="#f0db4f" key="react-icon" />,
        <DiReact size={"80px"} color="#61DBFB" key="react-icon" />,
      ],
    },
    {
      institucion: "Surcolombiana University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Escudo_de_la_Universidad_Surcolombiana.svg/1200px-Escudo_de_la_Universidad_Surcolombiana.svg.png",
      titulo: "Software Developer",
      fecha: "February 2022 - Currently",
      skills: "JAVA, Terminal Linux, C++, Workbench, Software Engineering",
      logos: [
        <SiCplusplus size={"80px"} color="#264de4" key="react-icon" />,
        <DiJava size={"80px"} color="#f89820" key="react-icon" />,
        <DiMysql size={"80px"} color="white" key="react-icon" />,
      ],
    },
  ];

  return (
    <BackgroundEducation id="Education">
      <Typography variant="h4">Education</Typography>
      <Grid container spacing={5} justifyContent="center">
        {cardsEducation.map(
          ({ institucion, logo, titulo, fecha, skills, logos }, i) => (
            <Grid item key={i}>
              <StyledCard data-aos="fade-right">
                <CardInner>
                  <CardFront>
                    <CardMedia
                      component="img"
                      image={logo}
                      alt={institucion}
                      sx={{
                        background: "white",
                        borderRadius: "10px",
                        width: "50%",
                        height: "auto",
                        boxSizing: "border-box",
                        padding: "10px",
                        objectFit: "fill",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "30%",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ textAlign: "center", color: "#03C988" }}
                      >
                        {titulo}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        {fecha}
                      </Typography>
                    </CardContent>
                  </CardFront>
                  <CardBack>
                    <div
                      style={{
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-around",
                        display: "flex",
                      }}
                    >
                      {logos.map((skill, i) => (
                        <span key={i}>{skill}</span>
                      ))}
                    </div>
                    <Typography variant="body2" component="div">
                      {skills}
                    </Typography>
                  </CardBack>
                </CardInner>
              </StyledCard>
            </Grid>
          )
        )}
      </Grid>
    </BackgroundEducation>
  );
}
