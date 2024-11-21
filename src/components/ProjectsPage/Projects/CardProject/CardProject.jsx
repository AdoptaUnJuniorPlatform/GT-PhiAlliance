import styles from "./CardProject.module.css";

export default function CardProject({ img, altImg, title, content }) {
  return (
    <section className={styles.card}>
      <div className={styles.imgCard}>
        <img src={img} alt={altImg} />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{content}</span>
      </div>
      <button>X</button>
    </section>
  );
}
