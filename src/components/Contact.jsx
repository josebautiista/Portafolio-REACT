import { Typography, Link } from "@mui/material";
import { styled } from "styled-components";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactSection = styled.section`
  background-color: #1a1a2e;
  padding: 20px 0px 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const ContactTitle = styled(Typography)`
  color: white;
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  gap: 10px;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <ContactSection id="Contact">
      <ContactTitle
        variant="h4"
        sx={{ marginBottom: "50px" }}
        data-aos="fade-left"
      >
        Contact Me
      </ContactTitle>
      <ContactLink
        data-aos="fade-right"
        href="mailto:josebautiista@gmail.com"
        sx={{ color: "#BB001B", textDecoration: "none", fontSize: "20px" }}
      >
        <AiOutlineMail size={50} />
        josebautiista@gmail.com
      </ContactLink>
      <ContactLink
        data-aos="fade-left"
        href="https://github.com/josebautiista"
        target="_blank"
        sx={{ color: "#9489c9", textDecoration: "none", fontSize: "20px" }}
      >
        <AiFillGithub size={50} />
        GitHub
      </ContactLink>
      <ContactLink
        data-aos="fade-right"
        href="https://www.linkedin.com/in/jose-bautista-sft/"
        target="_blank"
        sx={{ color: " #0e76a8", textDecoration: "none", fontSize: "20px" }}
      >
        <AiFillLinkedin size={50} />
        LinkedIn
      </ContactLink>
    </ContactSection>
  );
}
