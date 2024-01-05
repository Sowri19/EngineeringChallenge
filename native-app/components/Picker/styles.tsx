import styled from "styled-components/native";

const PickerContainer = styled.View`
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const PickerInput = styled.TextInput`
  font-size: 16px;
  padding-vertical: 12px;
  padding-horizontal: 10px;
  color: black;
  flex-grow: 1;
  flex-shrink: 0;
`;

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
};

export { PickerContainer, PickerInput, pickerSelectStyles };
