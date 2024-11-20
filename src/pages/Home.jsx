import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FollowUs from "../components/FollowUs/FollowUs";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";
import AboutUs from "../components/AboutUs/AboutUs";
import Colaboradores from "../components/Colaboradores/Colaboradores"

export default function HomePage() {
  // Crear referencias para cada sección
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const comunidadRef = useRef(null);
  const teamRef = useRef(null);
  const followUsRef = useRef(null);

  // Obtener el estado de la navegación
  const location = useLocation();

  useEffect(() => {
    // Comprobar si existe un estado y desplazarse a la sección correspondiente
    if (location.state?.section) {
      scrollToSection(location.state.section);
    }
  }, [location]);

  const scrollToSection = (section) => {
    // Desplazarse a la sección indicada
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
        <AboutUs />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={comunidadRef}>
        <Team />
      </div>
      <div ref={followUsRef}>
        <FollowUs />
      </div>
    </>
  );
}
