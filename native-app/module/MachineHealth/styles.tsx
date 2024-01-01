import styled from "styled-components/native";

const ButtonStyled = styled.Button`
  color: #fff;
  background-color: #4e69a2;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

const LoadingText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #4e69a2;
  margin-top: 10px;
`;

const Container = styled.View`
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export { ButtonStyled, LoadingText, Container };
