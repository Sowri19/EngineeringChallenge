import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const LoginContainer = styled.View`
  margin-top: 20px;
`;

const LoginText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #007bff;
  margin-top: 10px;
`;

export { Container, Heading, LoginContainer, LoginText };
