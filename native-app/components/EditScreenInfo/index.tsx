import React, { useCallback, useState } from "react";
import { Platform } from "react-native";
import { MachineType } from "../../data/types";
import Picker from "../Picker/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/states";
import { updateData } from "../../redux/slices/machineDataSlice";
import {
  EditScreenContainer,
  Label,
  Input,
  SaveButton,
  HealthScore,
} from "./styles";

const EditScreenInfo = ({ path }: { path: string }) => {
  const [machineName, setMachineName] = useState("");
  const [partName, setPartName] = useState("");
  const [partValue, setPartValue] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();
  const machineData = useSelector((state: RootState) => state.machineData.data); // Use useSelector

  const machineNames = [
    { label: "Welding Robot", value: MachineType.WeldingRobot },
    { label: "PaintingStation", value: MachineType.PaintingStation },
    { label: "Assembly Line", value: MachineType.AssemblyLine },
    {
      label: "Quality Control Station",
      value: MachineType.QualityControlStation,
    },
  ];

  const partNames = [
    { value: "arcStability", label: "Arc Stability" },
    {
      value: "coolingEfficiency",
      label: "Cooling Efficiency",
    },
    { value: "electrodeWear", label: "Electrode Wear" },
    { value: "seamWidth", label: "Seam Width" },
    {
      value: "shieldingPressure",
      label: "Shielding Pressure",
    },
    { value: "vibrationLevel", label: "Vibration Level" },
    { value: "wireFeedRate", label: "Wire Feed Rate" },
    {
      value: "colorConsistency",
      label: "Color Consistency",
    },
    { value: "flowRate", label: "Flow Rate" },
    {
      value: "nozzleCondition",
      label: "Nozzle Condition",
    },
    { value: "pressure", label: "Pressure" },
    {
      value: "alignmentAccuracy",
      label: "Alignment Accuracy",
    },
    { value: "beltSpeed", label: "Belt Speed" },
    {
      value: "fittingTolerance",
      label: "Fitting Tolerance",
    },
    { value: "speed", label: "Speed" },
    {
      value: "cameraCalibration",
      label: "Camera Calibration",
    },
    {
      value: "criteriaSettings",
      label: "Criteria Settings",
    },
    {
      value: "lightIntensity",
      label: "Light Intensity",
    },
    {
      value: "softwareVersion",
      label: "Software Version",
    },
  ];

  const apiUrl: string = `http://${
    Platform?.OS === "android" ? "10.0.2.2" : "localhost"
  }:3001/machine-health`;

  const savePart = useCallback(async () => {
    try {
      const newMachineData = machineData
        ? JSON.parse(JSON.stringify(machineData))
        : { machines: {} };

      if (!newMachineData.machines[machineName]) {
        newMachineData.machines[machineName] = {};
      }
      newMachineData.machines[machineName][partName] = partValue;

      dispatch(updateData(newMachineData));
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [dispatch, machineData, machineName, partName, partValue]);

  return (
    <EditScreenContainer>
      <Label>Machine Name</Label>
      <Picker
        value={machineName}
        onSetValue={setMachineName}
        items={machineNames}
      />

      <Label>Part Name</Label>
      <Picker value={partName} onSetValue={setPartName} items={partNames} />

      <Label>Part Value</Label>
      <Input
        value={partValue}
        onChangeText={(text) => setPartValue(text)}
        placeholder="Enter part value"
      />

      <SaveButton title="Save" onPress={savePart} />

      {isSaved && <HealthScore>Saved ✔️</HealthScore>}
    </EditScreenContainer>
  );
};

export default EditScreenInfo;
