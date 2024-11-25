import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import QueYParaQue from "../components/HomePage/QueYParaQue/QueYParaQue";
import Projects from "../components/HomePage/Projects/Projects";
import ColaboradoresCarousel from "../components/HomePage/Colaboradores/Colaboradores";
import Team from "../components/HomePage/Team/Team";
import FollowUs from "../components/HomePage/FollowUs/FollowUs";
import Hero from "../components/HomePage/Hero/Hero";

export default function HomePage({ isOpenManifiesto, setIsOpenManifiesto }) {
  const heroRef = useRef(null);
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
      hero: heroRef,
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
      <div ref={heroRef}>
        <Hero
          isOpenManifiesto={isOpenManifiesto}
          setIsOpenManifiesto={setIsOpenManifiesto}
        />
      </div>
      <div ref={aboutUsRef}>
        <QueYParaQue />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <ColaboradoresCarousel />
      <div ref={comunidadRef}>
        <Team />
      </div>
      <div ref={followUsRef}>
        <FollowUs />
      </div>
    </>
  );
}
