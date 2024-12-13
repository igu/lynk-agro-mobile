import { useRef } from "react";
import { Image, Text, View, StyleSheet, TextInput } from "react-native";

import { router } from "expo-router";

import { UserAccountLoginFormProps } from "@/contexts/UserAccountRegisterFormContext";
import { useForm } from "react-hook-form";
import { useUserRegister } from "@/hooks/useUserRegister";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { IconId, IconLockPassword } from "@tabler/icons-react-native";

import { colors, fontFamily } from "@/styles/theme";

export const style = StyleSheet.create({
  logo: {
    width: 128,
    height: 128,
    marginTop: 24,
    marginBottom: 28,
  },
  textLight: {
    fontSize: 24,
    fontFamily: fontFamily.regular,
    color: colors.gray[200],
  },
  textWeight: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[200],
    marginTop: 10,
  },
  container: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.teal.dark,
  },
});

export default function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserAccountLoginFormProps>();

  const senhaRef = useRef<TextInput | null>(null);

  const { checkUserInfo, updateUserAccountRegisterForm } = useUserRegister();

  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />

      <Input
        icon={IconId}
        label="CPF / CNPJ"
        error={errors?.cpf_cnpj?.message}
        keyboardType="numeric"
        customMask={(value: string) => {
          if (!value) return value;

          const numericValue = value.replace(/\D/g, "");

          // in this line i verify if numericValue result is greater than 11 if is true is about CNPJ
          if (numericValue.length > 11) {
            return numericValue
              .replace(/\D/g, "")
              .replace(/^(\d{2})(\d)/, "$1.$2")
              .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
              .replace(/\.(\d{3})(\d)/, ".$1/$2")
              .replace(/(\d{4})(\d)/, "$1-$2");
          }

          // else is CPF
          return numericValue
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{2})$/, "$1-$2");
        }}
        placeholder={"Digite seu CPF ou CNPJ"}
        formProps={{
          name: "cpf_cnpj",
          control,
          rules: {
            required: "CPF ou CNPJ é obrigatório.",
            maxLength: {
              message: "Tamanho do CNPJ é maior que o esperado",
              value: 18,
            },
          },
        }}
        onSubmitEditing={() => senhaRef.current?.focus()}
        returnKeyType={"next"}
      />

      <Input
        ref={senhaRef}
        icon={IconLockPassword}
        label="Senha"
        error={errors?.password?.message}
        placeholder={"Senha"}
        formProps={{
          name: "password",
          control,
          rules: {
            required: "Senha é obrigatório.",
            minLength: {
              value: 5,
              message: "Senha tem mais 5 digitos",
            },
          },
        }}
        sensitiveField
        onSubmitEditing={handleSubmit((data) => {
          const success = checkUserInfo(data);

          success
            ? router.navigate("/home")
            : setError("password", {
                type: "required",
                message: "E-mail ou senha incorretos. Tente novamente.",
              });
        })}
        returnKeyType={"done"}
      />

      <Button
        title="Entrar"
        onPress={handleSubmit((data) => {
          const success = checkUserInfo(data);

          success
            ? router.navigate("/home")
            : setError("password", {
                type: "required",
                message: "E-mail ou senha incorretos. Tente novamente.",
              });
        })}
      />

      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: fontFamily.medium,
            color: colors.gray[200],
          }}
          onPress={() => {
            updateUserAccountRegisterForm({});
            router.navigate("/signup");
          }}
        >
          Cadastre-se
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontFamily: fontFamily.regular,
            color: colors.gray[300],
          }}
        >
          Esqueci minha senha?
        </Text>
      </View>
    </View>
  );
}
