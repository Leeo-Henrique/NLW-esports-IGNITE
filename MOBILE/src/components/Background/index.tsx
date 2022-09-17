import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "./styles";
import bgGalaxy from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={bgGalaxy}
      defaultSource={bgGalaxy}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
