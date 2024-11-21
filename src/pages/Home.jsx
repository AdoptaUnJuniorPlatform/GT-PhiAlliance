import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FollowUs from "../components/FollowUs/FollowUs";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";
import Colaboradores from "../components/Colaboradores/Colaboradores";
import QueYParaQue from "../components/QueYParaQue/QueYParaQue";

export default function HomePage() {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const comunidadRef = useRef(null);
  const followUsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scrollToSection(location.state.section);
    }
  }, [location]);

  const scrollToSection = (section) => {
    const sectionsMap = {
      home: homeRef,
      aboutUs: aboutUsRef,
      projects: projectsRef,
      comunidad: comunidadRef,
      followUs: followUsRef,
    };

    const targetRef = sectionsMap[section];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutUsRef}>
        <QueYParaQue />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Colaboradores />
      <div ref={comunidadRef}>
        <Team />
      </div>
      <div ref={followUsRef}>
        <FollowUs />
      </div>
    </>
  );
}
