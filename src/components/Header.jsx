import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const Nav = styled(AppBar)`
  display: flex;
  justify-content: center;
  height: 80px;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
`;

function Header({ isMobile }) {
  const menus = ["Home", "About", "Education", "Projects", "Contact"];
  const [isScrolling, setIsScrolling] = useState(false);
  const [links, setLinks] = useState([]);
  const linksRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLinks(linksRef.current?.querySelectorAll("a"));
  }, []);

  useEffect(() => {
    function trackSections() {
      const sections = document.querySelectorAll("section");
      const trackedSections = new Set();

      const handleScroll = () => {
        setCurrentSection(getCurrentSection());
        if (currentSection && !trackedSections.has(currentSection)) {
          trackedSections.add(currentSection);
        }
      };

      window.addEventListener("scroll", handleScroll);

      function getCurrentSection() {
        return (
          [...sections]
            .reverse()
            .find(
              (section) =>
                section.getBoundingClientRect().top <= window.innerHeight * 0.5
            )?.id || null
        );
      }
    }
    trackSections();
  }, [currentSection]);

  useEffect(() => {
    links.forEach((link) => {
      if (link.getAttribute("href") === `/#${currentSection}`) {
        link.style.color = "white";
      } else {
        link.style.color = "#03C988";
      }
    });
  }, [currentSection]);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (isMobile) {
      const linksContainer = linksRef.current;

      if (menu) {
        linksContainer.style.display = "flex";
        setTimeout(() => {
          linksContainer.style.opacity = "1";
        }, 10);
      } else {
        linksContainer.style.opacity = "0";
        setTimeout(() => {
          linksContainer.style.display = "none";
        }, 300);
      }
    }
  }, [isMobile, menu]);

  return (
    <Nav
      position="fixed"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "80px",
        width: "100%",
        background: isScrolling ? "#1A1A2E" : "transparent",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div">
            {isMobile ? "< JB />" : "< Jose Bautista />"}
          </Typography>
          {isMobile ? (
            <MenuIcon
              fontSize="large"
              onClick={handleMenuClick}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            ""
          )}
          <div
            id="links"
            ref={linksRef}
            style={{
              display: isMobile ? "none" : "flex",
              ...(isMobile && {
                opacity: "0",
                position: "absolute",
                top: "80px",
                left: "-24px",
                height: "90vh",
                background: "#1A1A2E",
                width: "100%",
                justifyContent: "space-evenly",
                transition: "opacity 0.3s ease-in-out",
              }),
              flexDirection: isMobile ? "column" : "row",
              gap: "30px",
            }}
          >
            {menus.map((nombre, i) => (
              <Link
                key={i}
                color={nombre === "Home" ? "white" : "#03C988"}
                underline="hover"
                sx={{ cursor: "pointer", marginLeft: "10px" }}
                href={`/#${nombre}`}
                onClick={handleMenuClick}
              >
                {nombre}
              </Link>
            ))}
          </div>
        </Toolbar>
      </Container>
    </Nav>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
