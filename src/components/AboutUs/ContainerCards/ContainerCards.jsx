import { Box } from "@mui/material";
import Card from "./Card/Card";
import GalaxiaIcon from "../../Icons/GalaxiaIcon";
import EstrellasIcon from "../../Icons/EstrellasIcon";
import IAIcon from "../../Icons/IAIcon";
import { aboutUs } from "../../../assets/data/AboutUs";
import { useState } from "react";

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
        description="Lorem ipsum dolor sit amet consectetur."
        fullDescripcion={aboutUs.cards[0].content}
        icon={<GalaxiaIcon />}
        title={aboutUs.cards[0].title}
        color="blue"
        handleSize={handleSizeBlue}
        size={sizeBlue}
      />
      {/* Tarjeta morada con los eventos de mouse */}
      <Card
        description="Lorem ipsum dolor sit amet consectetur."
        fullDescripcion={aboutUs.cards[1].content}
        icon={<EstrellasIcon />}
        title={aboutUs.cards[1].title}
        color="purple"
        handleSize={handleSizePurple}
        size={sizePurple}
      />
      <Card
        description="Lorem ipsum dolor sit amet consectetur."
        fullDescripcion={aboutUs.cards[2].content}
        icon={<IAIcon />}
        title={aboutUs.cards[2].title}
        color="yellow"
        handleSize={handleSizeYellow}
        size={sizeYellow}
      />
    </Box>
  );
}