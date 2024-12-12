import { useContext } from "react";

import { UserAccountRegisterFormContext } from "@/contexts/UserAccountRegisterFormContext";

export function useUserRegister() {
  const context = useContext(UserAccountRegisterFormContext);

  return context;
}
