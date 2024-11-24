import styles from "./CardProject.module.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function CardProject({ title, content, img, altImg, link }) {
  return (
    <section className={styles.card}>
      <img src={img} alt={altImg} />
      <div className={styles.cardContent}>
        <h1>{title}</h1>
        <span>{content}</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ControlPointIcon />
        </a>
      </div>
    </section>
  );
}
