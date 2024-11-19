import { Box } from "@mui/material";
import FollowUs from "../components/FollowUs/FollowUs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import QueYParaQue from "../components/QueYParaQue/QueYParaQue";
import Team from "../components/Team/Team";

export default function HomePage() {
  return (
    <Box component="section" sx={{padding: "2rem 4rem"}}>
      <Header />
      <Home />
      <QueYParaQue />
      <Projects />
      <Team />
      <FollowUs />
      <Footer />
    </Box>
  );
}
