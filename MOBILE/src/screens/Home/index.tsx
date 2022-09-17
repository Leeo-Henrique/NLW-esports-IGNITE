import { View, Image, FlatList } from "react-native";
import bgImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={bgImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        contentContainerStyle={styles.contentList}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
