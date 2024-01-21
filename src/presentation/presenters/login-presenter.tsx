import { router } from "expo-router";
import { Alert } from "react-native";
import { useAuth } from "../context/auth-context";
import LoginPresenter from "./login-presenter.types";

export const useLoginPresenter = (): LoginPresenter => {
  const { login: loginAuth } = useAuth();

  return {
    login: async (username, password) => {
      try {
        my.loading(true);

        await loginAuth(username, password);
        router.push("/home");
      } catch (error) {
        Alert.alert("Gagal", "Terjadi kesalahan", [{ text: "OK" }]);
      } finally {
        my.loading(false);
      }
    },
  };
};
