import React from "react";
import { router } from "expo-router";
import { View, Text } from "react-native";
import { AuthContext } from "../../src/context/auth";

const Login = () => {
  const { setHasLogged } = React.useContext(AuthContext);

  const onLogin = () => {
    setHasLogged(true);
    router.push("/");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={onLogin}>Login</Text>
    </View>
  );
};

export default Login;
