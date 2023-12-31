import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import Login from "../../module/login/index";
import { RootState } from "../../types/states";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/authentication";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        const user = userCredential.user;
        dispatch(loginSuccess({ email: user.email }));
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return !isLoggedIn ? (
    <Login
      onPress={handleLogin}
      setEmail={setEmail}
      password={password}
      email={email}
      setPassword={setPassword}
    />
  ) : (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Machine State",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-ul" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Log Part",
          tabBarIcon: ({ color }) => <TabBarIcon name="edit" color={color} />,
        }}
      />
    </Tabs>
  );
}
