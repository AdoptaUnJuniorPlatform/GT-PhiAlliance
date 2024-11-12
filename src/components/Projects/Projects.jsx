import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Section from "../Section/Section";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ImgProyectos from "../../assets/images/imagen-proyectos.png";

export default function Projects() {
  return (
    <Section>
      <Box
        component="section"
        id="home"
        sx={{ pt: 12, pb: 8, padding: "2rem 8rem 2rem 8rem" }}
      >
        <Container maxWidth="xxl" disableGutters sx={{ display: "flex" }}>
          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              flex={1}
              mb={{ xs: 4, lg: 0 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Stack spacing={4} width="90%">
                <Typography variant="h1" align="left" fontSize="5rem">
                  Nuestro Proyectos
                </Typography>
                <Typography variant="h6" color="text.secondary" align="left">
                  Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 50,
                    alignSelf: "flex-start",
                    backgroundColor: "white",
                    color: "#9B84EE",
                    "&:hover": {
                      backgroundColor: "#574EA0",
                      color: "white",
                      "& .icon-container": {
                        backgroundColor: "white",
                        "& .icon-arrow": {
                          color: "#574EA0",
                        },
                      },
                    },
                    border: "1px solid #9B84EE",
                    gap: "1rem",
                    padding: "1.5rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Leer más
                  <Box
                    component={"section"}
                    className="icon-container"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#574EA0",
                      height: "3rem",
                      width: "3rem",
                      transition: "background-color 0.3s",
                    }}
                  >
                    <NorthEastIcon
                      className="icon-arrow"
                      sx={{
                        color: "white",
                        fontSize: "1.5rem",
                        transition: "color 0.3s",
                      }}
                    />
                  </Box>
                </Button>
              </Stack>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Box
                component="img"
                src={ImgProyectos}
                alt="Imagen Proyectos"
                sx={{
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Section>
  );
}
