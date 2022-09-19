import { SafeAreaView } from "react-native-safe-area-context";
import { View, TouchableOpacity, Image, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import { Background } from "../../components/Background";
import LogoPng from "../../assets/logo-nlw-esports.png";
import { DuoMatch } from "../../components/DuoMatch";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import api from "../../utils/api";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");

  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const GetDiscordUser = async (adsId: string) => {
    api
      .get(`/ads/${adsId}/discord`)
      .then((res) => setDiscordDuoSelected(res.data.discord))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get(`/games/${game.id}/ads`)
      .then((res) => setDuos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-small-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
              onPress={goBack}
            />
          </TouchableOpacity>
          <Image source={LogoPng} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          keyExtractor={(duo) => duo.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => {
                GetDiscordUser(item.id);
              }}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <DuoMatch
          closeModal={() => {
            setDiscordDuoSelected("");
          }}
          discord={discordDuoSelected}
          visible={discordDuoSelected.length > 0}
        />
      </SafeAreaView>
    </Background>
  );
}
