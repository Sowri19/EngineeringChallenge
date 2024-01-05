import styled from "styled-components/native";
import { TextInput, Button } from "react-native";
import { Text, View } from "../Themed";
const EditScreenContainer = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Label = styled(Text)`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled(TextInput)`
  height: 40px;
  width: 100%;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 20px;
  padding-horizontal: 10px;
`;

const HealthScore = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const SaveButton = styled(Button)``;

export { EditScreenContainer, Label, Input, HealthScore, SaveButton };
