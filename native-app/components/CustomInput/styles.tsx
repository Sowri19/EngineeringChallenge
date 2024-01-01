import styled from "styled-components/native";

const InputContainer = styled.View`
  margin: 0px;
  width: 100%;
`;

const TextInputStyled = styled.TextInput`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PasswordFieldContainer = styled.View`
  position: relative;
  width: 100%;
`;

const PasswordToggle = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export {
  InputContainer,
  TextInputStyled,
  PasswordFieldContainer,
  PasswordToggle,
};
