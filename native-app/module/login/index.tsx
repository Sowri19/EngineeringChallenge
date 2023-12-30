import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputFields from "../../components/CustomInput";
import BlueButton from "../../components/BlueButton";

const Login = ({ onPress, setEmail, setPassword, password, email }) => {
  return (
    <View style={styles.container}>
      <InputFields
        setEmail={setEmail}
        email={email}
        password={password}
        setPassword={setPassword}
      />
      <BlueButton title="Submit" onPress={() => onPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
});

export default Login;
