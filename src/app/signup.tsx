import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

import { router } from "expo-router";

import { UserAccountRegisterFormProps } from "@/contexts/UserAccountRegisterFormContext";

import { useUserRegister } from "@/hooks/useUserRegister";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  IconIdBadge2,
  IconLockPassword,
  IconMail,
  IconUserCircle,
} from "@tabler/icons-react-native";

import { colors, fontFamily } from "@/styles/theme";

const style = StyleSheet.create({
  textLight: {
    fontSize: 20,
    fontFamily: fontFamily.regular,
    color: colors.gray[200],
  },
  textInformation: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.gray[200],
    textAlign: "center",
  },
  textWeight: {
    fontSize: 40,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[200],
    marginTop: 10,
  },
  container: {
    alignSelf: "flex-start",
    backgroundColor: colors.teal.dark,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fontFamily.regular,
    color: colors.gray[300],
    marginTop: 10,
  },
});

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<UserAccountRegisterFormProps>();

  const emailRef = useRef<TextInput | null>(null);
  const nomeRef = useRef<TextInput | null>(null);
  const senhaRef = useRef<TextInput | null>(null);
  const confirmacaoSenhaRef = useRef<TextInput | null>(null);

  const { updateUserAccountRegisterForm } = useUserRegister();

  function handleNextStep(data: UserAccountRegisterFormProps) {
    updateUserAccountRegisterForm(data);
    router.navigate("/home");
  }

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues();

    return (
      password === passwordConfirmation ||
      "A confirmação de senha está diferente da senha digitada."
    );
  }

  return (
    <SafeAreaView>
      <View>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 24,
          }}
        >
          <Text style={style.textWeight}>Cadastre-se</Text>
          <Text style={style.subtitle}>
            Estamos a um passo da sua revolução{" "}
          </Text>

          <View style={{ marginVertical: 30 }}>
            <Input
              icon={IconIdBadge2}
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
              onSubmitEditing={() => emailRef.current?.focus()}
              returnKeyType={"next"}
            />

            <Input
              ref={emailRef}
              icon={IconMail}
              label="E-mail"
              error={errors?.email?.message}
              placeholder={"Digite seu melhor e-mail"}
              formProps={{
                name: "email",
                control,
                rules: {
                  required: "Email é obrigatório.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Digite um email válido.",
                  },
                },
              }}
              onSubmitEditing={() => nomeRef.current?.focus()}
              returnKeyType={"next"}
            />

            <Input
              ref={nomeRef}
              icon={IconUserCircle}
              label="Nome / Razão Social"
              error={errors?.nome?.message}
              placeholder={"Seu nome ou da sua empresa"}
              formProps={{
                name: "nome",
                control,
                rules: {
                  required: "Nome ou Razão Social é obrigatório.",
                  minLength: {
                    value: 3,
                    message:
                      "O seu nome ou razão social deve conter mais de 3 caracteres.",
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
                    message: "Sua senha deve conter pelo menos 5 caracteres.",
                  },
                },
              }}
              sensitiveField
              onSubmitEditing={() => confirmacaoSenhaRef.current?.focus()}
              returnKeyType={"next"}
            />

            <Input
              ref={confirmacaoSenhaRef}
              icon={IconLockPassword}
              label="Confirmar senha"
              error={errors?.confirm_password?.message}
              placeholder={"Confirme sua senha"}
              formProps={{
                name: "confirm_password",
                control,
                rules: {
                  required: "Confirmação de senha é obrigatório.",
                  validate: validationPasswordConfirmation,
                },
              }}
              sensitiveField
              onSubmitEditing={handleSubmit(handleNextStep)}
              returnKeyType={"done"}
            />

            <Button title="Cadastrar" onPress={handleSubmit(handleNextStep)} />

            <Text
              style={style.textInformation}
              onPress={() => router.navigate("/login")}
            >
              Já é um dos nossos? Entrar
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
