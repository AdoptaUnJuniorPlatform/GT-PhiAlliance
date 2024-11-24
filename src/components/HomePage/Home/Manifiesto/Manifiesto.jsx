import { useState } from "react";
import CardManifiesto from "./CardManifiesto/CardManifiesto";
import CardManifiestoContent from "./CardManifiestoContent/CardManifiestoContent";
import styles from "./Manifiesto.module.css";
import LanguageIcon from "@mui/icons-material/Language";

export default function Manifiesto({ isOpen, onClose, setIsOpen }) {
  const [openCard, setOpenCard] = useState(false);

  const handleCardClick = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  return isOpen ? (
    <div className={styles.manifiesto} onClick={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.cards}>
          <CardManifiesto
            color="aqua"
            icon={<LanguageIcon sx={{ fontSize: "7rem" }} />}
            content="Innovación para mejorar vidas"
            setIsOpenContent={() => handleCardClick("aqua")}
            isOpenContent={openCard === "aqua"}
            isCloser
            setIsModelOpen={setIsOpen}
          />
          <CardManifiesto
            color="yellow"
            icon={<LanguageIcon sx={{ fontSize: "7rem" }} />}
            content="Innovación para mejorar vidas"
            setIsOpenContent={() => handleCardClick("yellow")}
            isOpenContent={openCard === "yellow"}
          />
          <CardManifiesto
            color="purple"
            icon={<LanguageIcon sx={{ fontSize: "7rem" }} />}
            content="Innovación para mejorar vidas"
            setIsOpenContent={() => handleCardClick("purple")}
            isOpenContent={openCard === "purple"}
          />
          <CardManifiesto
            color="green"
            icon={<LanguageIcon sx={{ fontSize: "7rem" }} />}
            content="Innovación para mejorar vidas"
            setIsOpenContent={() => handleCardClick("green")}
            isOpenContent={openCard === "green"}
          />
          <CardManifiesto
            color="orange"
            icon={<LanguageIcon sx={{ fontSize: "7rem" }} />}
            content="Innovación para mejorar vidas"
            setIsOpenContent={() => handleCardClick("orange")}
            isOpenContent={openCard === "orange"}
          />
        </div>
        {openCard && (
          <CardManifiestoContent
            color={openCard}
            isOpen={true}
            content="En PHI Alliance, creemos en el poder de las tecnologías exponenciales para multiplicar el impacto positivo. Imaginamos un mundo donde cada avance no solo transforma, sino que eleva la calidad de vida de todos, conectando a personas y comunidades en una misión comun."
          />
        )}
      </div>
    </div>
  ) : null;
}
