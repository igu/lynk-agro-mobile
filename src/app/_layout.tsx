import { Stack } from "expo-router";
import { UserAccountRegisterFormProvider } from "@/contexts/UserAccountRegisterFormContext";

import { Loading } from "@/components/loading";

import { colors } from "@/styles/theme";

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function Layout() {
  const [fontsAlready] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsAlready) {
    return <Loading />;
  }

  return (
    <UserAccountRegisterFormProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.teal.dark },
        }}
      />
    </UserAccountRegisterFormProvider>
  );
}
