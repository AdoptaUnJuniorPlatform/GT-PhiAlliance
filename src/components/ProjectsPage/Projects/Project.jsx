import Section from "../../Section/Section";
import CardProject from "./CardProject/CardProject";
import WebPhiaImg from "../../../assets/images/ProjectImg.png";

export default function Project() {
  return (
    <Section>
      <CardProject
        altImg={"WebPhiaImg"}
        img={WebPhiaImg}
        title={"WebApp PHIA"}
        content={
          "La asociación sin ánimo de lucro Positive Human Impact Alliance junto con Sustainable Startup & CO presentan PHIA, una webApp impulsada por inteligencia artificial generativa, diseñada para luchar contra la brecha digital, creando un producto regenerativo que cree una comunidad de apoyo y colaboración, fomentando el aprendizaje y la motivación."
        }
      />
    </Section>
  );
}
