import React, { useCallback, useEffect, useState } from "react";
import { Button, Platform, TextInput } from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import RNPickerSelect from "react-native-picker-select";
import machineData from "../../data/machineData.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMachineData } from "../../app/useMachineData";
import { useFocusEffect } from "expo-router";
import styled from "styled-components/native";

import { MachineType, machineNames } from "../../data/types";
import { MachineScoreContainer, MachineScoreText } from "./styles";

const MachineScore = ({
  machineName,
  score,
}: {
  machineName: string;
  score: string;
}) => {
  return (
    <MachineScoreContainer>
      {score && (
        <MachineScoreText>
          {`${machineNames[machineName]}: ${score}`}
        </MachineScoreText>
      )}
    </MachineScoreContainer>
  );
};

export { MachineScore };
