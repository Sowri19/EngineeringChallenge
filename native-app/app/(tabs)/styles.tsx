import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f0f0f0;
  padding: 10px;
`;

export const BoxContainer = styled.View`
  width: 90%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const TextStyled = styled.Text`
  font-size: 14px;
  color: #2e78b7;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px 15px;
  border-radius: 8px;
  margin: 10px 0;
  width: 80%;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export const ResetButtonContainer = styled(ButtonContainer)`
  background-color: #ff6347;
`;
