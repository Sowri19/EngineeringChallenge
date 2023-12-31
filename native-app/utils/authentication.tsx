import { initializeApp } from "@firebase/app";
import { initializeAuth, getReactNativePersistence } from "@firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfpot7yrwiw1EHaAo-_6kRDqhj0FRHk_c",
  authDomain: "engineeringchallenge-daf52.firebaseapp.com",
  projectId: "engineeringchallenge-daf52",
  storageBucket: "engineeringchallenge-daf52.appspot.com",
  messagingSenderId: "736199564862",
  appId: "1:736199564862:web:b81b3bfe088389c5103b6f",
  measurementId: "G-P9E8MF9W0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
