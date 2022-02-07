import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/ui/screens/home/Home';
import Login from './src/ui/screens/login/Login';
import Loading from './src/ui/screens/loading/Loading';
import * as firebase from 'firebase/app';
import apiKeys from './config/keys';

const Stack = createStackNavigator();


export default function App() {
  if (!firebase.getApps().length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Loading'} component={Loading} options={{ headerShown: false }}/>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
          {/* <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
          <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
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
