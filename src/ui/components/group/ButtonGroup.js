import { View } from 'react-native';
import ToggleLightButton from './button/ToggleLightButton';
import styles from "./button.styles.js";

export default function ButtonGroup() {

    return (
        <View style={styles.contentView}>
            <View style={styles.buttonsContainer}>
            <   ToggleLightButton></ToggleLightButton>
            </View>
            <View style={styles.buttonsContainer}>
                
            </View>
        </View>
    )
}