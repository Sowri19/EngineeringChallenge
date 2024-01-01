import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

const BlueButton = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default BlueButton;
