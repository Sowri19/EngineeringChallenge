import React from "react";
import { PickerContainer, pickerSelectStyles } from "./styles";
import RNPickerSelect from "react-native-picker-select";
const PickerIos = ({ value, onSetValue, items }) => {
  return (
    <PickerContainer>
      <RNPickerSelect
        placeholder={{ label: "Select a machine", value: null }}
        items={items}
        onValueChange={(value) => onSetValue(value)}
        value={value}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
      />
    </PickerContainer>
  );
};

export default PickerIos;
