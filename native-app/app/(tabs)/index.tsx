import React, { useCallback } from "react";
import { Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../../types/states";
import { resetData, setScores } from "../../redux/slices/machineDataSlice";
import {
  Container,
  BoxContainer,
  Title,
  SubTitle,
  TextStyled,
  ButtonContainer,
  ButtonText,
  ResetButtonContainer,
} from "./styles";
import { PartsOfMachine } from "../../components/PartsOfMachines/PartsOfMachine";
import { MachineScore } from "../../components/MachineScore/index";
import LogoutButton from "../../components/Logout";

let apiUrl = "https://fancy-dolphin-65b07b.netlify.app/api/machine-health";
if (__DEV__) {
  apiUrl = `http://${
    Platform.OS === "android" ? "10.0.2.2" : "localhost"
  }:3001/machine-health`;
}

const StateScreen = () => {
  const dispatch = useDispatch();
  const machineData = useSelector((state: RootState) => state.machineData.data);
  const uid = useSelector((state: RootState) => state.auth.uid);

  const calculateHealth = useCallback(async () => {
    try {
      const requestBody = {
        machines: machineData?.machines,
        factory: machineData?.scores?.factory,
        uid: uid,
      };
      const response = await axios.post(apiUrl, requestBody);
      if (response.data?.factory) {
        dispatch(setScores(response.data));
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, machineData, uid]);

  // Function to handle resetting data
  const handleResetData = async () => {
    try {
      // Make an HTTP DELETE request to the API endpoint to delete data
      await axios.delete(`${apiUrl}/delete-data/${uid}`);

      // Dispatch the reset action to clear data in Redux
      dispatch(resetData());
    } catch (error) {
      console.error("Error resetting data:", error);
    }
  };

  return (
    <Container>
      <BoxContainer>
        <Title>Factory Health Score</Title>
        <TextStyled>
          {machineData?.scores?.factory
            ? `Score: ${machineData.scores.factory}`
            : "Not yet calculated"}
        </TextStyled>
      </BoxContainer>

      {/* Display Machine Scores */}
      {machineData?.scores?.machineScores && (
        <BoxContainer>
          <SubTitle>Machine Health Scores</SubTitle>
          {Object.keys(machineData.scores.machineScores).map((key, index) => (
            <MachineScore
              key={index}
              machineName={key}
              score={machineData.scores.machineScores[key]}
            />
          ))}
        </BoxContainer>
      )}

      {/* Display Parts of Machine */}
      {machineData?.machines &&
        Object.keys(machineData.machines).map((machineName) => (
          <BoxContainer key={machineName}>
            <PartsOfMachine
              machineName={machineName}
              parts={machineData.machines[machineName]}
            />
          </BoxContainer>
        ))}

      <ButtonContainer onPress={calculateHealth}>
        <ButtonText>Calculate Health</ButtonText>
      </ButtonContainer>
      <ResetButtonContainer onPress={handleResetData}>
        <ButtonText>Reset Machine Data</ButtonText>
      </ResetButtonContainer>

      <LogoutButton />
    </Container>
  );
};

export default StateScreen;
