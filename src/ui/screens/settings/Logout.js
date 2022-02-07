import { View } from "react-native";
import { Button } from 'react-native-elements';
import LogoutButton from "../../components/group/button/LogoutButton.js";

import styles from './logout.styles.js';

export default function Logout({ navigation }) {
    return (
        <View style={styles.contentView}>
            <View style={styles.buttonsContainer}>
                <LogoutButton navigation={navigation}></LogoutButton>
            </View>
        </View>
    )
}