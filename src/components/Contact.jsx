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

const DivContact = styled.div`
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
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

  const contactLinks = [
    {
      href: "mailto:josebautiista@gmail.com",
      color: "#BB001B",
      icon: <AiOutlineMail size={50} />,
      label: "josebautiista@gmail.com",
    },
    {
      href: "https://github.com/josebautiista",
      target: "_blank",
      color: "#9489c9",
      icon: <AiFillGithub size={50} />,
      label: "Josebautiista",
    },
    {
      href: "https://www.linkedin.com/in/jose-bautista-sft/",
      target: "_blank",
      color: "#0e76a8",
      icon: <AiFillLinkedin size={50} />,
      label: "Jose Bautista",
    },
  ];

  return (
    <ContactSection id="Contact">
      <ContactTitle
        variant="h4"
        sx={{ marginBottom: "50px" }}
        data-aos="fade-up"
      >
        Contact Me
      </ContactTitle>
      <DivContact>
        {contactLinks.map((link, index) => (
          <ContactLink
            key={link.label}
            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
            href={link.href}
            target={link.target}
            sx={{ color: link.color, textDecoration: "none", fontSize: "20px" }}
          >
            {link.icon}
            {link.label}
          </ContactLink>
        ))}
      </DivContact>
    </ContactSection>
  );
}
