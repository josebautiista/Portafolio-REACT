import { styled } from "styled-components";
import { Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const BackgroundEducation = styled.div`
  background: #1a1a2e;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 80px 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export default function Education() {
  const cardsEducation = [
    {
      institucion: "Udemy",
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      titulo: "React: From zero to expert",
      fecha: "February 2023 - May 2023",
      skills: "Hooks, JEST, React Testing Library",
    },
    {
      institucion: "ORACLE Next Education",
      logo: "https://www.oracle.com/a/ocom/img/rh03-one-v-black-lad.png",
      titulo: "React front-end developer",
      fecha: "November 2022 - June 2023",
      skills: "Agile, Soft Skills, JavaScript, HTML, CSS, React",
    },
    {
      institucion: "Surcolombiana University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Escudo_de_la_Universidad_Surcolombiana.svg/1200px-Escudo_de_la_Universidad_Surcolombiana.svg.png",
      titulo: "Software Developer",
      fecha: "February 2022 - Currently",
      skills: "JAVA, Terminal Linux, C++, Workbench, Software Engineering",
    },
  ];

  return (
    <BackgroundEducation id="Education">
      <Typography variant="h4">Education</Typography>
      <Grid container spacing={5} justifyContent="center">
        {cardsEducation.map(
          ({ institucion, logo, titulo, fecha, skills }, i) => (
            <Grid item key={i}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "300px",
                  height: "75vh",
                }}
              >
                <CardMedia
                  component="img"
                  image={logo}
                  alt={institucion}
                  sx={{
                    width: "85%",
                    height: "50%",
                    boxSizing: "border-box",
                    padding: "10px",
                    objectFit: "fill",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: "#03C988" }}
                  >
                    {titulo}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {fecha}
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                    {skills}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </BackgroundEducation>
  );
}
