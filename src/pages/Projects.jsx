import { Box, Typography } from "@mui/material";
import Section from "../components/Section/Section";
import Project from "../components/ProjectsPage/Projects/Project";

export default function ProjectsPage() {
  return (
    <Section>
      <Box component="section" sx={{ pt: 12, pb: 8 }}>
        <Typography variant="h1" marginTop="4rem" marginBottom="4rem">
          Nuestros proyectos.
        </Typography>
        <Project />
      </Box>
    </Section>
  );
}
