import styles from "./CardManifiesto.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function CardManifiesto({
  icon,
  content,
  color,
  setIsOpenContent,
  isOpenContent,
  isCloser,
  setIsModelOpen, 
  reversedOrder
}) {
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

  const handleCardClick = () => {
    setIsOpenContent(!isOpenContent);
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setIsModelOpen(false);
    setIsOpenContent(!isOpenContent);
  };

  return (
    <div className={getClassName()} onClick={handleCardClick}>
      {reversedOrder ? (
        <>
          <span className={styles.cardContentLeft}>{content}</span>
          {icon}
        </>
      ) : (
        <>
          {icon}
          <span className={styles.cardContent}>{content}</span>
        </>
      )}


      {isCloser ? (
        <div className={styles.closer} onClick={handleCloseClick}>
          <CloseRoundedIcon />
        </div>
      ) : null}
    </div>
  );
}
