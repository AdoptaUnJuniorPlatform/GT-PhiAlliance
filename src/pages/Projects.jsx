import { Box } from "@mui/material";
import Section from "../components/Section/Section";
import Project from "../components/ProjectsPage/Projects/Project";

export default function ProjectsPage() {
  return (
    <Section>
      <Box component="section" sx={{ pt: 12, pb: 8 }}>
        <span>Nuestros proyectos.</span>
        <Project />
      </Box>
    </Section>
  );
}
