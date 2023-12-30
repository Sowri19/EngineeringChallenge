import React from "react";
import { Button, StyleSheet } from "react-native";

const BlueButton = ({ onPress, title }) => (
  <Button
    onPress={onPress}
    title={title}
    color={styles.buttonColor.color} // Use the color from the styles
  />
);

const styles = StyleSheet.create({
  buttonColor: {
    color: "#0000FF", // This is the color code for blue
  },
});

export default BlueButton;
