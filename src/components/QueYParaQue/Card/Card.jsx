import styles from "./Card.module.css";

export default function Card({ icon, title, description, color }) {
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

    return (
        <div className={getClassName()}>
            <div>{icon}</div>
            <span>{title}</span>
            <p>{description}</p>
        </div>
    );
}
