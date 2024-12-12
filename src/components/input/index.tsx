import { forwardRef, useState } from "react";
import {
  Text,
  View,
  TextInput,
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
} from "react-native";

import { Controller, UseControllerProps } from "react-hook-form";
import {
  IconEyeClosed,
  IconEyeUp,
  IconProps,
} from "@tabler/icons-react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type InputProps = {
  label: string;
  icon: React.ComponentType<IconProps>;
  error: string | undefined;
  sensitiveField?: boolean;
  placeholder?: string;
  formProps: UseControllerProps;
  onSubmitEditing?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  customMask?: (value: string) => string;
  keyboardType?: KeyboardTypeOptions;
};

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      icon: Icon,
      error = "",
      sensitiveField = false,
      placeholder,
      formProps,
      onSubmitEditing,
      returnKeyType = "done",
      customMask = undefined,
      keyboardType = "default",
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hideField, setHideField] = useState(sensitiveField);

    return (
      <Controller
        {...formProps}
        render={({ field }) => (
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>{label}</Text>

            <View
              style={[
                styles.input,
                {
                  borderColor: error
                    ? colors.red.base
                    : isFocused
                    ? colors.gray[300]
                    : colors.extras.input,
                },
              ]}
            >
              {Icon && <Icon size={18} color={colors.teal.light} />}

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={{ flex: 1 }}
                  ref={ref}
                  secureTextEntry={hideField}
                  placeholder={placeholder}
                  onBlur={() => {
                    setIsFocused(false);
                  }}
                  keyboardType={keyboardType}
                  autoCorrect={false}
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  returnKeyType={returnKeyType}
                  value={field.value}
                  onChangeText={(e) => {
                    field.onChange(customMask ? customMask(e) : e);
                  }}
                  onSubmitEditing={onSubmitEditing}
                />

                {sensitiveField && hideField && (
                  <IconEyeClosed
                    onPress={() =>
                      setHideField((old) => {
                        return !old;
                      })
                    }
                    size={18}
                    color={colors.teal.light}
                  />
                )}

                {sensitiveField && !hideField && (
                  <IconEyeUp
                    onPress={() =>
                      setHideField((old) => {
                        return !old;
                      })
                    }
                    size={18}
                    color={colors.teal.light}
                  />
                )}
              </View>
            </View>

            {error && <Text style={styles.errorInput}>{error}</Text>}
          </View>
        )}
      />
    );
  }
);

export { Input };
