import { useEffect, useState } from "react";
import { ScrollView, Text, View, Animated, Easing } from "react-native";
import ButtonGroup from "../../components/group/ButtonGroup";
import styles from "./home.styles";
import ToggleLightButton from "../../components/group/button/ToggleLightButton";
import ResetButton from "../../components/group/button/ResetButton";
import { colorValues, colorsRGB, colorsName } from '../../../enums/colors';

export default function Home() {
    const [style, setStyle] = useState(styles.backdrop);
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [displayButtons, setDisplayButtons] = useState(false);

    const colorInterpolation =  animation.interpolate({
        inputRange: [
            colorValues.WHITE,
            colorValues.BLUE,
            colorValues.RED,
            colorValues.PURPLE,
            colorValues.GREEN,            
            colorValues.PINK,
            colorValues.ORANGE,
            colorValues.YELLOW,
            colorValues.BLACK
            ],
        outputRange: [
            colorsRGB.WHITE,
            colorsRGB.BLUE,
            colorsRGB.RED,
            colorsRGB.PURPLE,
            colorsRGB.GREEN,
            colorsRGB.PINK,
            colorsRGB.ORANGE,
            colorsRGB.YELLOW,
            colorsRGB.BLACK
        ]
      });

      const animatedStyle = {
        backgroundColor: colorInterpolation
      }

      const handleAnimation = (value, duration) => {
          return new Promise((resolve, reject) => {
            Animated.timing(animation, {
                toValue: value,
                duration: duration,
                easing: Easing.linear,
                useNativeDriver: false
              }).start(({ isFinished }) => {
                resolve();
              });
          });
      }

    const updateBackgroundColor = (value, duration) => {
        return new Promise(async (resolve, reject) => {
            await handleAnimation(value, duration);
            resolve();
        });
    }

    const initializeDisplayButtons = (isLightOn) => {
        setDisplayButtons(isLightOn);
    }

    if (displayButtons) {
        return (
            <View style={styles.home}>
                <Animated.View style={{...style, ...animatedStyle}}>
                    <ScrollView>
                        <ButtonGroup onBackgroundColorChange={(value, duration) => updateBackgroundColor(value, duration)} />
                    </ScrollView>
                </Animated.View>
                <View style={styles.mainButtons}>
                    <ResetButton title="Reset Color" 
                        buttonColor={colorsName.BLACK} 
                        color={colorsName.WHITE} 
                        colorValue={colorValues.WHITE} 
                        icon="loop" 
                        iconFont="foundation" 
                        onBackgroundColorChange={(color, duration) => updateBackgroundColor(color, duration)}></ResetButton>
                    <ToggleLightButton 
                        icon="light-up" 
                        iconFont="entypo" 
                        initializeDisplayButtons={(isLightOn) => initializeDisplayButtons(isLightOn)}></ToggleLightButton>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.home}>
                <View style={styles.mainButtons}>
                    <ResetButton title="Reset Color" 
                        buttonColor={colorsName.BLACK} 
                        color={colorsName.WHITE} 
                        colorValue={colorValues.WHITE} 
                        icon="loop" 
                        iconFont="foundation" 
                        onBackgroundColorChange={(color, duration) => updateBackgroundColor(color, duration)}></ResetButton>
                    <ToggleLightButton 
                        icon="light-up" 
                        iconFont="entypo" 
                        initializeDisplayButtons={(isLightOn) => initializeDisplayButtons(isLightOn)}></ToggleLightButton>
                </View>
            </View>
        )
    }
}