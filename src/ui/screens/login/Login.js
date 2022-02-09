import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, StyleSheet, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';
import styles from './login.styles';
import * as firebase from 'firebase/auth';
import Background from '../../components/background/Background';
import sleep from '../../../api/Thread';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, isLoading] = useState(false);

  const login = async (email, password) => {
    try {
        await firebase.signInWithEmailAndPassword(firebase.getAuth(), email, password);
        isLoading(false);
        navigation.replace('TabNavigators');
      } catch (err) {
        Alert.alert('There is something wrong!', err.message);
        isLoading(false);
      }
  }

  const handlePress = async () => {
    isLoading(true);
    await sleep(2000);
    if (!email) {
      Alert.alert('Email field is required.');
      isLoading(false);
      return ;
    }

    if (!password) {
      Alert.alert('Password field is required.');
      isLoading(false);
      return;
    }

    login(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Background>
      <View style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "white",
          marginBottom: 20}}>
        <Image 
          style={{height: 200, width: 200}} 
          source={require('../../../../assets/heart.png')}></Image>
          <Text style={styles.text}>HeartWinner</Text>
      </View>

      <View>
        <TextInput
          mode="outlined"
          style={styles.formInput}
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />
        <TextInput
          mode="outlined"
          style={styles.formInput}
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
      </View>

      <Button
          title="Log in"
          onPress={() => handlePress()}
          loading={loading}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
              backgroundColor: 'rgb(220,20,60)',
              borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
              marginHorizontal: 50,
              height: 50,
              width: 200,
              marginVertical: 30,
          }}
      />

      <StatusBar style="dark" />
      </Background>
  );
}