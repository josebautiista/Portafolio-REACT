import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { styled } from "styled-components";
import Project from "./project";

export const BackgroundProjects = styled.section`
  background: #1a1a2e;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const project = [
  {
    src: "./mokepon.png",
    alt: "juego-mokepon",
    link: "https://josebautiista.github.io/Mokepon/",
  },
  {
    src: "./hooks.png",
    alt: "Hooks y buenas practicas",
    link: "https://hooks-buenas-practicas-react.vercel.app/",
  },
  {
    src: "./notas.png",
    alt: "App para notas",
    link: "https://josebautiista.github.io/Notas-Manipulando_DOM/",
  },
  {
    src: "./organizacion.png",
    alt: "App para organizacion",
    link: "https://organizacion-react.vercel.app/",
  },
  {
    src: "./styled-components.png",
    alt: "App con diseño",
    link: "https://styled-component-react-sepia.vercel.app/",
  },
];

export default function Projects() {
  return (
    <BackgroundProjects id="Projects">
      <Typography variant="h4">Projects</Typography>
      <Carousel
        height="400px"
        animation="slide"
        navButtonsAlwaysVisible="true"
        sx={{ width: "73vw", padding: "20px" }}
        navButtonsProps={{
          style: {
            backgroundColor: "white",
            color: "black",
            borderRadius: "50%",
            padding: "8px",
          },
        }}
      >
        {project.map((pro, i) => (
          <Project key={i} datos={pro} />
        ))}
      </Carousel>
    </BackgroundProjects>
  );
}
