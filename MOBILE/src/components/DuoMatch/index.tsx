import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { CheckCircle } from "phosphor-react-native";
import * as ClipBoard from "expo-clipboard";

interface Props extends ModalProps {
  discord: string;
  closeModal: () => void;
}
export function DuoMatch({ discord, closeModal, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);
  const HandleCopyDiscord = async () => {
    setIsCopping(true);
    await ClipBoard.setStringAsync(discord);
    Alert.alert(
      "Discord copiado!",
      "Usuario copiado para colar no Discord e encontrar o player!"
    );
    setIsCopping(false);
  };

  return (
    <Modal animationType="fade" {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={HandleCopyDiscord}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
