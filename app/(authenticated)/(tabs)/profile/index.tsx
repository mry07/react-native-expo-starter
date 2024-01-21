import React from "react";
import { useAuth } from "../../../../src/presentation/context/auth-context";
import { View, Text } from "react-native";

const Profile = () => {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={logout}>Logout</Text>
    </View>
  );
};

export default Profile;
