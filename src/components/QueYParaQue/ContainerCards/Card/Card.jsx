import styles from "./Card.module.css";

export default function Card({ icon, title, description, color, size, handleSize, fullDescripcion }) {
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
            <div className={styles.cardContent}>
                <div>{icon}</div>
                <span>{title}</span>
            </div>

            <p>{description}</p>
        </div>
    ) : (
        <div className={`${getClassName()} ${styles.cardMaxWidth}`} onMouseLeave={handleSize}>
            <div className={styles.cardMaxWidthDiv}>
                <div className={styles.cardContent}>
                    <div>{icon}</div>
                    <span>{title}</span>
                </div>
                <p>{fullDescripcion}</p>
            </div>
        </div>
    )
}
