import { Box } from "@mui/material";
import Card from "./Card/Card";
import GalaxiaIcon from "../../Icons/GalaxiaIcon";
import EstrellasIcon from "../../Icons/EstrellasIcon";
import IAIcon from "../../Icons/IAIcon";
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
        description={`Lorem ipsum dolor sit amet.\nConsectetur adipiscing elit.`} 
        fullDescripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo"
        icon={<GalaxiaIcon />}
        title="Qué"
        color="blue"
        handleSize={handleSizeBlue}
        size={sizeBlue}
      />
      <Card
        description={`Lorem ipsum dolor sit amet.\nConsectetur adipiscing elit.`} 
        fullDescripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo"
        icon={<EstrellasIcon />}
        title="Para Qué"
        color="purple"
        handleSize={handleSizePurple}
        size={sizePurple}
      />
      <Card
        description={`Lorem ipsum dolor sit amet.\nConsectetur adipiscing elit.`} 
        fullDescripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, cumque. Consequuntur molestias praesentium corporis earum autem sint, aliquid odio amet! Nihil adipisci assumenda vero asperiores earum et temporibus fuga nemo"
        icon={<IAIcon />}
        title="Cómo"
        color="yellow"
        handleSize={handleSizeYellow}
        size={sizeYellow}
      />
    </Box>
  );
}
