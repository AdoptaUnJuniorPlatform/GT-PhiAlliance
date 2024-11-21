import styles from "./Card.module.css";
export default function Card({
  icon,
  title,
  description,
  color,
  size,
  handleSize,
  fullDescripcion,
  fullDescripcion1
}) {
  
  const getClassName = () => {
    switch (color) {
      case "blue":
        return `${styles.card} ${styles.cardBlue}`;
      case "purple":
        return `${styles.card} ${styles.cardPurple}`;
      case "yellow":
        return `${styles.card} ${styles.cardYellow}`;
      default:
        return `${styles.card} ${styles.cardBlue}`;
    }
  };

  return size ? (
    <div className={getClassName()} onMouseEnter={handleSize}>
      <div className={styles.circle}></div>
      <div className={styles.cardContent}>
        {icon}
        <span>{title}</span>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>

    </div>
  ) : (
    <div
      className={`${getClassName()} ${styles.cardMaxWidth}`}
      onMouseLeave={handleSize}
    >
      <div className={styles.cardMaxWidthDiv}>
        <div className={styles.circle}></div>
        <div className={styles.cardContent}>
          <div>{icon}</div>
          <span>{title}</span>
        </div>
        <div className={styles.fullDescription}>
          <p>{fullDescripcion}</p>
          <p>{fullDescripcion1}</p>
        </div>
      </div>
    </div>
  );
}
