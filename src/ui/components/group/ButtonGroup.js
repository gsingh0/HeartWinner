import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ToggleLightButton from './button/ToggleLightButton';
import styles from "./button.styles.js";
import MoodButton from './button/MoodButton';

export default function ButtonGroup({ onBackgroundColorChange }) {

    return (
        <View style={styles.contentView}>

            <View style={styles.buttonsContainer}>
                <ToggleLightButton icon="light-up" iconFont="entypo" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></ToggleLightButton>
                <MoodButton title="Reset Color" buttonColor="black" color="white" icon="loop" iconFont="foundation" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></MoodButton>
            </View>

            <Text style={styles.subHeader}>Mood</Text>
            <View style={styles.buttonsContainer}>
                {/* need icon too */}
                <MoodButton title="Company" buttonColor="pink" color="pink" icon="heart" iconFont="ant-design" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></MoodButton>
                <MoodButton title="Talk" buttonColor="green" color="green" icon="hipchat" iconFont="fontisto" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></MoodButton>
                <MoodButton title="Vent" buttonColor="orange" color="orange" icon="fire" iconFont="fontisto" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></MoodButton>
                <MoodButton title="Annoy" buttonColor="blue" color="blue" icon="laugh-squint" iconFont="font-awesome-5" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></MoodButton>
            </View>

            <Text style={styles.subHeader}>Miscellaneous</Text>
            <View style={styles.buttonsContainer}>
                <MoodButton></MoodButton>
                <MoodButton></MoodButton>

            </View>
        </View>
    )
}