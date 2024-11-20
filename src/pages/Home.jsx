import FollowUs from "../components/FollowUs/FollowUs";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";
import AboutUs from "../components/AboutUs/AboutUs";

export default function HomePage() {
  return (
    <>
      <Home />
      <AboutUs />
      <Projects />
      <Team />
      <FollowUs />
    </>
  );
}
