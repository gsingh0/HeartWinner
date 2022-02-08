import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonGroup from "../../components/group/ButtonGroup";
import styles from "./home.styles";
import hslToRgb from '../../../api/ColorConverter';
import ToggleLightButton from "../../components/group/button/ToggleLightButton";
import ResetButton from "../../components/group/button/ResetButton";

export default function Home() {
    const [style, setStyle] = useState(styles.home);

    const updateBackgroundColor = (color) => {
        if (typeof color === 'string' || color instanceof String) {
            setStyle({
                position: 'relative',
                flex: 1,
                backgroundColor: color,
                
              });
        } else {
            let rgb = hslToRgb(color.hue / 360.0, 1.0, 0.5);
            setStyle({
                position: 'relative',
                flex: 1,
                backgroundColor: "rgb(" + rgb[0] + ", " +  rgb[1] + ", " + rgb[2] + ")"
              });
        }
    }

    return (
        <View style={style}>
            <ScrollView>
                <ButtonGroup onBackgroundColorChange={(color) => updateBackgroundColor(color)} />
            </ScrollView>
            <View style={styles.mainButtons}>
                <ResetButton title="Reset Color" buttonColor="black" color="white" icon="loop" iconFont="foundation" onBackgroundColorChange={(color) => updateBackgroundColor(color)}></ResetButton>
                <ToggleLightButton icon="light-up" iconFont="entypo" onBackgroundColorChange={(color) => updateBackgroundColor(color)}></ToggleLightButton>
            </View>
        </View>
    
    )
}