import React from "react";
import InputFields from "../../components/CustomInput";
import BlueButton from "../../components/BlueButton";
import { Container, Heading, LoginContainer, LoginText } from "./styles";

const Login = ({ onPress, setEmail, setPassword, password, email }) => {
  return (
    <Container>
      <Heading>Login to BellSant</Heading>
      <InputFields
        setEmail={setEmail}
        email={email}
        password={password}
        setPassword={setPassword}
      />
      <BlueButton title="Login" onPress={() => onPress()} />
      <LoginContainer>
        <LoginText>Don't have an account? Register here.</LoginText>
      </LoginContainer>
    </Container>
  );
};

export default Login;
