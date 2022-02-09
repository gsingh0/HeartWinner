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
                    <MoodButton title="Missing You" 
                            buttonColor="rgb(255,105,180)"
                            target={colorsName.PINK}
                            colorValue={colorValues.PINK}
                            icon="heart" 
                            iconFont="ant-design" 
                            onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton title="Company" 
                        buttonColor="rgb(255,140,0)"
                        target={colorsName.ORANGE}
                        colorValue={colorValues.ORANGE}
                        icon="emoji-people" 
                        iconFont="material-icons" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton title="Talk" 
                        buttonColor="rgb(0,0,139)"
                        target={colorsName.BLUE} 
                        colorValue={colorValues.BLUE}
                        icon="hipchat" 
                        iconFont="fontisto" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton 
                        title="Happy" 
                        buttonColor="rgb(0,100,0)"
                        target={colorsName.GREEN}
                        colorValue={colorValues.GREEN}
                        icon="md-happy-outline" 
                        iconFont="ionicon" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton 
                        title="Low" 
                        buttonColor="rgb(139,0,0)" 
                        target={colorsName.RED}
                        colorValue={colorValues.RED}
                        icon="emoticon-sad-outline" 
                        iconFont="material-community" 
                        onBackgroundColorChange={(value, duration) => onBackgroundColorChange(value, duration)}></MoodButton>
                    <MoodButton 
                        title="Hungry" 
                        buttonColor="rgb(204,204,0)" 
                        target={colorsName.YELLOW}
                        colorValue={colorValues.YELLOW}
                        icon="fast-food" 
                        iconFont="ionicon" 
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