import { View, Text, TouchableOpacity } from "react-native";

import { useUserRegister } from "@/hooks/useUserRegister";
import { router } from "expo-router";

import { colors } from "@/styles/colors";

export default function Home() {
  const { userAccountRegisterForm, updateUserAccountRegisterForm } =
    useUserRegister();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        marginTop: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 24, color: "#fff" }}>
          Hi! {userAccountRegisterForm.nome}
        </Text>

        <Text style={{ fontSize: 18, color: "#ccc" }}>
          {userAccountRegisterForm.email}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: 20,
          backgroundColor: colors.red.base,
          width: 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          marginBottom: 10,
        }}
        onPress={() => {
          router.navigate("/login");
        }}
      >
        <Text style={{ color: "#fff" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
