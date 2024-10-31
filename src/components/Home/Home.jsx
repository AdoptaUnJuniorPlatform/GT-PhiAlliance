import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Section from "../Section/Section";
import LogoHome from "../../assets/images/logo-home.png";
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function Home() {
  return (
    <Section>
      <Box component="section" id="home" sx={{ pt: 12, pb: 8, padding: "2rem 8rem 2rem 8rem" }} >
        <Container maxWidth="xxl" disableGutters sx={{ display: "flex" }}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            sx={{ height: "100%", alignItems: "flex-start" }}
          >
            <Box
              flex={1}
              mb={{ xs: 4, lg: 0 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start"
              }}
            >
              <Stack spacing={4} width="85%">
                <Typography variant="h1" align="left" fontSize="5rem">
                  Impulsando la innovación para un impacto positivo en el mundo
                </Typography>
                <Typography variant="h6" color="text.secondary" align="left">
                  Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 50, alignSelf: "flex-start", backgroundColor: "#574EA0", "&:hover": { backgroundColor: "#9B84EE" }, gap: "1rem", padding: "1.5rem", fontSize: "1.5rem" }}
                >
                  Manifiesto
                  <Box
                    component={"section"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      height: "3rem",
                      width: "3rem",
                    }}
                  ><NorthEastIcon  sx={{ color: "#574EA0", fontSize: "1.5rem"}} />
                  </Box>
                </Button>
              </Stack>
            </Box>
            <Box flex={1} display="flex" justifyContent="flex-end">
              <Box
                component="img"
                src={LogoHome}
                alt="Team collaboration"
                sx={{
                  width: "60%",
                  borderRadius: 2,
                  height: "55rem",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Section>
  );
}
