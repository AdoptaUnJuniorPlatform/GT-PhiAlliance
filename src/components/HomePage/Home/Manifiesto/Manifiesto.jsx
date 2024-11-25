import { useState } from "react";
import CardManifiesto from "./CardManifiesto/CardManifiesto";
import CardManifiestoContent from "./CardManifiestoContent/CardManifiestoContent";
import styles from "./Manifiesto.module.css";
import BombillaIcon from "../../../Icons/BombillaIcon";
import PlanetIcon from "../../../Icons/PlanetIcon";
import NetworkIcon from "../../../Icons/NetworkIcon";
import HandsIcon from "../../../Icons/HandsIcon";
import RocketIcon from "../../../Icons/RocketIcon";
import { manifiesto } from "../../../../assets/data/Manifiesto";

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
            icon={<PlanetIcon />}
            content="Innovación para mejorar vidas"
            setIsOpenContent={() => handleCardClick("aqua")}
            isOpenContent={openCard === "aqua"}
            isCloser
            setIsModelOpen={setIsOpen}
          />
          <CardManifiesto
            color="yellow"
            icon={<BombillaIcon />}
            content="Un futuro que soñamos y creamos juntos"
            setIsOpenContent={() => handleCardClick("yellow")}
            isOpenContent={openCard === "yellow"}
            reversedOrder
          />
          <CardManifiesto
            color="purple"
            icon={<HandsIcon />}
            content="Una comunidad unida para el cambio positivo"
            setIsOpenContent={() => handleCardClick("purple")}
            isOpenContent={openCard === "purple"}
          />
          <CardManifiesto
            color="green"
            icon={<NetworkIcon />}
            content="Un espacio para inspirarse, colaborar y construir impacto"
            setIsOpenContent={() => handleCardClick("green")}
            isOpenContent={openCard === "green"}
            reversedOrder

          />
          <CardManifiesto
            color="orange"
            icon={<RocketIcon />}
            content="Únete a esta misión y sé parte de un cambio exponencial"
            setIsOpenContent={() => handleCardClick("orange")}
            isOpenContent={openCard === "orange"}
          />
        </div>
        {openCard && (
          <CardManifiestoContent
            color={openCard}
            isOpen={true}
            content={manifiesto[openCard].content}
          />
        )}
      </div>
    </div>
  ) : null;
}
