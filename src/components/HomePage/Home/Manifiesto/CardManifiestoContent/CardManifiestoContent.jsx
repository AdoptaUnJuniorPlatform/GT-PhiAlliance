import styles from "./CardManifiestoContent.module.css";

export default function CardManifiestoContent({ content, isOpen, color }) {
  const getClassName = () => {
    switch (color) {
      case "aqua":
        return `${styles.card} ${styles.cardAqua}`;
      case "purple":
        return `${styles.card} ${styles.cardPurple}`;
      case "yellow":
        return `${styles.card} ${styles.cardYellow}`;
      case "orange":
        return `${styles.card} ${styles.cardOrange}`;
      case "green":
        return `${styles.card} ${styles.cardGreen}`;
      default:
        return `${styles.card} ${styles.card}`;
    }
  };

  return isOpen ? (
    <div className={getClassName()}>
      <span>{content}</span>
    </div>
  ) : null;
}
