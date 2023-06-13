import { styled } from "styled-components";
import Header from "../components/Header";
import About from "../components/AboutMe";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  }
  > p {
    color: white;
    margin: 0;
    font-size: 1.5rem;
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
      <Header />
      <BackgroundHome id="Home">
        <Imagen
          data-aos="flip-left"
          src="https://github.com/josebautiista.png"
          alt="Jose Bautista"
        />
        <Container>
          <h1>JOSE BAUTISTA</h1>
          <p>Front-end Developer</p>
        </Container>
      </BackgroundHome>
      <About />
      <Education />
      <Projects />
      <Contact />
    </section>
  );
}
