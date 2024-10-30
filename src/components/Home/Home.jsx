import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Section from "../Section/Section";

export default function Home() {
  return (
    <Section>
      <Box component="section" id="home" sx={{ pt: 12, pb: 8 }}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems="center" // Centrar verticalmente
            justifyContent="center" // Centrar horizontalmente
            sx={{ height: "100%" }} // Asegúrate de que el contenedor ocupe toda la altura disponible
          >
            <Box flex={1} mb={{ xs: 4, lg: 0 }} textAlign="center">
              <Stack spacing={4}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: "bold",
                  }}
                >
                  Impulsando la innovacion para un impacto positivo en el mundo
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 50, alignSelf: "center" }} // Centrar botón
                >
                  Comenzar Ahora
                </Button>
              </Stack>
            </Box>
            <Box flex={1}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Section>
  );
}
