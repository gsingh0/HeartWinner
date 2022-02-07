import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/ui/screens/home/Home';
import Login from './src/ui/screens/login/Login';
import * as firebase from 'firebase/app';
import apiKeys from './config/keys';

export default function App() {
  if (!firebase.getApps().length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <Login />
    // <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
