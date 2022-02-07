import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase/auth';
import styles from './loading.styles';

export default function LoadingScreen({ navigation }) {
  useEffect(
     () => {
      firebase.getAuth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('Login');
        }
      });
    }
  );

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}