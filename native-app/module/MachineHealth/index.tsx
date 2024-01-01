import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateHistory } from "../../redux/slices/machineDataSlice";
import ChartComponent from "../../components/ChartComponent/index";
import { RootState } from "../../types/states";

const MachineHealthComponent = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state: RootState) => state.auth.uid);
  const machineHealthHistory = useSelector(
    (state: RootState) => state.machineData.history
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchMachineHealthData = async () => {
    if (!uid) {
      console.error("UID is not available");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/machine-health/${uid}`
      );
      if (response.data) {
        dispatch(updateHistory(response.data));
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching machine health data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMachineHealthData();
  }, [uid]);

  return (
    <View>
      <Button
        onPress={fetchMachineHealthData}
        title="Refresh Data"
        color="#841584"
        disabled={isLoading}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ChartComponent data={machineHealthHistory} />
      )}
    </View>
  );
};

export default MachineHealthComponent;
