import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "../../src/presentation/components";
import { useLoginPresenter } from "../../src/presentation/presenters/login-presenter";

const Login = () => {
  const [username, setUsername] = React.useState("kminchelle");
  const [password, setPassword] = React.useState("0lelplR");

  const { login } = useLoginPresenter();

  return (
    <View style={styles.container}>
      <Input
        wrapperStyle={styles.input}
        label="Username"
        value={username}
        placeholder="Username"
        onChangeText={setUsername}
      />
      <Input
        wrapperStyle={styles.input}
        label="Password"
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        iconRight={({ size, color }) => (
          <FontAwesomeIcon icon={["fas", "eye"]} size={size} color={color} />
        )}
      />
      <Button title="Login" onPress={() => login(username, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
    marginHorizontal: 16,
  },
  input: {
    borderRadius: 8,
  },
});

export default Login;
