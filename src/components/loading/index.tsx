import { ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Loading() {
  return (
    <ActivityIndicator color={colors.teal.base} style={styles.container} />
  );
}
