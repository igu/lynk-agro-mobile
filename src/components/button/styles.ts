import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: colors.teal.base,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: fontFamily.semiBold,
    color: colors.extras.input,
  },
});
