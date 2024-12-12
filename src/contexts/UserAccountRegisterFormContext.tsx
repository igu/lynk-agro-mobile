import { createContext, ReactNode, useState } from "react";

export type UserAccountLoginFormProps = {
  cpf_cnpj?: string;
  password?: string;
};

export type UserAccountRegisterFormProps = UserAccountLoginFormProps & {
  email?: string;
  nome?: string;
  confirm_password?: string;
};

type UserAccountRegisterFormContextProps = {
  userAccountRegisterForm: UserAccountRegisterFormProps;
  updateUserAccountRegisterForm: (data: UserAccountRegisterFormProps) => void;
  checkUserInfo: (loginInfo: UserAccountLoginFormProps) => boolean;
};

type UserAccountRegisterFormProviderProps = {
  children: ReactNode;
};

const UserAccountRegisterFormContext =
  createContext<UserAccountRegisterFormContextProps>(
    {} as UserAccountRegisterFormContextProps
  );

function UserAccountRegisterFormProvider({
  children,
}: UserAccountRegisterFormProviderProps) {
  const [data, setData] = useState<UserAccountRegisterFormProps>(
    {} as UserAccountRegisterFormProps
  );

  function updateUserAccountRegisterForm(data: UserAccountRegisterFormProps) {
    setData((oldValues) => {
      return { ...oldValues, ...data };
    });
  }

  function checkUserInfo(loginInfo: UserAccountLoginFormProps) {
    return (
      loginInfo.cpf_cnpj === data.cpf_cnpj &&
      loginInfo.password === data.password
    );
  }

  return (
    <UserAccountRegisterFormContext.Provider
      value={{
        userAccountRegisterForm: data,
        updateUserAccountRegisterForm,
        checkUserInfo,
      }}
    >
      {children}
    </UserAccountRegisterFormContext.Provider>
  );
}

export { UserAccountRegisterFormProvider, UserAccountRegisterFormContext };
