import React, { useState } from "react";
import {
  InputContainer,
  TextInputStyled,
  PasswordFieldContainer,
  PasswordToggle,
} from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const InputFields = ({ email, setEmail, password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text.toLowerCase());
  };

  return (
    <InputContainer>
      <TextInputStyled
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <PasswordFieldContainer>
        <TextInputStyled
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <PasswordToggle onPress={() => setShowPassword(!showPassword)}>
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="#888"
          />
        </PasswordToggle>
      </PasswordFieldContainer>
    </InputContainer>
  );
};

export default InputFields;
