import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  input: {
    height: 40,
    backgroundColor: colors.extras.input,
    flexDirection: "row",
    paddingHorizontal: 8,
    borderRadius: 4,
    alignItems: "center",
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    width: "100%",
  },
  label: {
    color: colors.gray[200],
    fontFamily: fontFamily.regular,
    marginVertical: 5,
    fontSize: 18,
    marginBottom: 10,
  },
  errorInput: {
    color: colors.red.base,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    marginLeft: 4,
    marginTop: 4,
  },
});
