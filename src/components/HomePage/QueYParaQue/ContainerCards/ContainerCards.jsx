import { Box } from "@mui/material";
import Card from "./Card/Card";
import GalaxiaIcon from "../../../Icons/GalaxiaIcon";
import EstrellasIcon from "../../../Icons/EstrellasIcon";
import IAIcon from "../../../Icons/IAIcon";
import { useState } from "react";
import { aboutUs } from "../../../../assets/data/AboutUs";

export default function ContainerCards() {
  const [sizeBlue, setSizeBlue] = useState(true);
  const [sizePurple, setSizePurple] = useState(true);
  const [sizeYellow, setSizeYellow] = useState(true);

  const handleSizeBlue = () => {
    setSizeBlue(!sizeBlue);
  };

  const handleSizePurple = () => {
    setSizePurple(!sizePurple);
  };

  const handleSizeYellow = () => {
    setSizeYellow(!sizeYellow);
  };

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      sx={{ width: "100%" }}
    >
      <Card
        description={aboutUs.cards[0].subtitle}
        fullDescripcion={`${aboutUs.cards[0].content[0]} `}
        fullDescripcion1={aboutUs.cards[0].content[1]}
        icon={<GalaxiaIcon />}
        title={aboutUs.cards[0].title}
        color="blue"
        handleSize={handleSizeBlue}
        size={sizeBlue}
      />
      <Card
        description={aboutUs.cards[1].subtitle}
        fullDescripcion={aboutUs.cards[1].content}
        fullDescripcion1={
          <>
            <p>
              <strong>Aspiramos a:</strong>
            </p>
            <p>
              <strong>Reducir desigualdades:</strong>{" "}
              {aboutUs.cards[1].content[1]}
            </p>
            <p>
              <strong>Acelerar la sostenibilidad: </strong>
              {aboutUs.cards[1].content[2]}
            </p>
            <p>
              <strong>Empoderar y conectar comunidades: </strong>
              {aboutUs.cards[1].content[3]}
            </p>
          </>
        }
        icon={<EstrellasIcon />}
        title={aboutUs.cards[1].title}
        color="purple"
        handleSize={handleSizePurple}
        size={sizePurple}
      />
      <Card
        description={aboutUs.cards[2].subtitle}
        fullDescripcion={`${aboutUs.cards[2].content[0]} `}
        fullDescripcion1={<strong>{aboutUs.cards[2].content[1]}</strong>}
        icon={<IAIcon />}
        title={aboutUs.cards[2].title}
        color="yellow"
        handleSize={handleSizeYellow}
        size={sizeYellow}
      />
    </Box>
  );
}
