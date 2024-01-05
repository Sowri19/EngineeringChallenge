import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/authentication";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
