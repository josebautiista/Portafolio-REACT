import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";

function Header() {
  const menus = ["Home", "About", "Education", "Projects", "Contact"];
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        width: "100%",
        margin: "0 auto",
        background: isScrolling ? "#1A1A2E" : "transparent",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div">
            {"< Jose Bautista />"}
          </Typography>
          <div style={{ display: "flex", gap: "30px" }}>
            {menus.map((nombre, i) => (
              <Link
                key={i}
                color="#03C988"
                underline="hover"
                sx={{ cursor: "pointer", marginLeft: "10px" }}
                href={`/#${nombre}`}
              >
                {nombre}
              </Link>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
