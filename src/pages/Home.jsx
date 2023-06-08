import { styled } from "styled-components";
import Header from "../components/Header";
import About from "../components/AboutMe";
import Education from "../components/Education";

const BackgroundHome = styled.div`
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
  }
  > p {
    color: white;
    margin: 0;
    font-size: 1.5rem;
  }
`;

export default function Home() {
  return (
    <section id="Home">
      <Header />
      <BackgroundHome>
        <Imagen
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
    </section>
  );
}
