import { Image, FlatList } from "react-native";
import { useEffect, useState } from "react";
import bgImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { GameCard, IGameCardProps } from "../../components/GameCard";
import api from "../../utils/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [myGames, setMyGames] = useState<IGameCardProps[]>([]);

  const Navigation = useNavigation();
  useEffect(() => {
    api
      .get("/games")
      .then((res) => {
        setMyGames(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlerOpenGame = ({ bannerUrl, id, title }: IGameCardProps) => {
    Navigation.navigate("game", { bannerUrl, id, title });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={bgImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={myGames}
          contentContainerStyle={styles.contentList}
          keyExtractor={(game) => game.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handlerOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
