import { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button } from 'react-native-elements';
import LogoutButton from "../../components/group/button/LogoutButton.js";

import styles from './logout.styles.js';

export default function Logout({ navigation }) {
    const [text, setText] = useState("Dream Team <3");
    return (
        <View style={styles.contentView}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../../../../assets/us.png')}></Image>
            </View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.buttonsContainer}>
                <LogoutButton navigation={navigation}></LogoutButton>
            </View>
        </View>
    )
}