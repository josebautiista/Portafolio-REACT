import styled from "styled-components";
import Header from "../components/Header";
import About from "../components/AboutMe";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { useMediaQuery } from "@mui/material";
const BackgroundHome = styled.section`
  background: url("./bg-fon.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
`;

const Imagen = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;

  ${({ isMobile }) =>
    isMobile &&
    `
    width: 150px;
    height: 150px;
  `}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    color: #03c988;
    margin: 0;
    font-size: 4rem;
    overflow: hidden;
    border-right: 3px solid;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 2px;
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    ${({ isMobile }) =>
      isMobile &&
      `
    font-size:2rem;
  `}
  }
  > p {
    color: white;
    margin: 0;
    font-size: 1.5rem;
    ${({ isMobile }) =>
      isMobile &&
      `
    font-size:1rem;
  `}
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #03c988;
    }
  }
`;

export default function Home() {
  const isMobile = useMediaQuery("(max-width:720px)");
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <section>
      <Header isMobile={isMobile} />
      <BackgroundHome style={{ flexDirection: isMobile && "column" }} id="Home">
        <Imagen
          isMobile={isMobile}
          src="https://github.com/josebautiista.png"
          alt="Jose Bautista"
        />
        <Container isMobile={isMobile}>
          <h1>JOSE BAUTISTA</h1>
          <p>Front-end Developer</p>
        </Container>
      </BackgroundHome>
      <About isMobile={isMobile} />
      <Education />
      <Projects isMobile={isMobile} />
      <Contact isMobile={isMobile} />
    </section>
  );
}
