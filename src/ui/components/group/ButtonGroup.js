import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ToggleLightButton from './button/ToggleLightButton';
import styles from "./button.styles.js";
import MoodButton from './button/MoodButton';
import ToggleRepititionButton from './button/ToggleRepititionButton';
import MorphButton from './button/MorphButton';
import CycleButton from './button/CycleButton';
import { colorValues, colorsRGB, colorsName } from '../../../enums/colors';

export default function ButtonGroup({ onBackgroundColorChange }) {

    return (
        <View style={styles.contentView}>
            <View style={styles.buttonView}>
                <View style={styles.buttonsContainer}>
                    <MoodButton title="Company" 
                        buttonColor={colorsRGB.PINK} 
                        target={colorsName.PINK}
                        colorValue={colorValues.PINK}
                        icon="heart" 
                        iconFont="ant-design" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton title="Talk" 
                        buttonColor={colorsRGB.GREEN} 
                        target={colorsName.GREEN} 
                        colorValue={colorValues.GREEN}
                        icon="hipchat" 
                        iconFont="fontisto" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton 
                        title="Vent" 
                        buttonColor={colorsRGB.ORANGE} 
                        target={colorsName.ORANGE}
                        colorValue={colorValues.ORANGE}
                        icon="fire" 
                        iconFont="fontisto" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    
                    <ToggleRepititionButton 
                        toColor={colorsName.RED} 
                        toColorValue={colorValues.RED} 
                        fromColor={colorsName.BLUE}
                        fromColorValue={colorValues.BLUE}
                        icon="laugh-squint" 
                        iconFont="font-awesome-5" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></ToggleRepititionButton>
                    <CycleButton 
                        icon="question" 
                        iconFont="font-awesome-5" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></CycleButton>      
                </View>
            </View>
{/* 
            <View style={styles.buttonsContainer}>
                <CycleButton icon="question" iconFont="font-awesome-5" onBackgroundColorChange={(color) => onBackgroundColorChange(color)}></CycleButton>      
            </View> */}
        </View>
    )
}