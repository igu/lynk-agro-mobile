import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type InputProps = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress = () => {} }: InputProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
