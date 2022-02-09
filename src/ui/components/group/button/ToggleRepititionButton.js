import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { gray } from 'kleur';
import { colorValues, colorsRGB, colorsName } from '../../../../enums/colors';

export default function ToggleRepititionButton({ toColor, toColorValue, fromColor, fromColorValue, icon, iconFont, onBackgroundColorChange }) {

    const pulseEffect = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: appConfig["lifx-url"] + appConfig.light.id + "/effects/pulse",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: toColor,
                    from_color: fromColor,
                    period: 1.0,
                    cycles: 15
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                Alert.alert(error);
                reject(error);
            });
        });
    }

    const setLightColor = async (targetColor) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: appConfig["lifx-url"] + appConfig.light.id + "/state",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: targetColor,
                    brightness: 1.0
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    } 

    const runPulse = async () => {
        let currColor = fromColor;
        let count = 0;
        await pulseEffect();
        while (count < 15) {
            if (currColor === fromColor) {
                onBackgroundColorChange(toColorValue, 100) 
                currColor = toColor;
            } else {
                onBackgroundColorChange(fromColorValue, 100) 
                currColor = fromColor;
            }
            count++;
            await sleep(1000);
        }
        await setLightColor(colorsName.WHITE);
        onBackgroundColorChange(colorValues.WHITE, 1000); 
    }

    return (
        <Button
        onPress={() => runPulse()}
        title="Annoy"
        icon={{
          name: icon,
          type: iconFont,
          size: 20,
          color: 'white',
        }}
        iconContainerStyle={{ 
            marginRight: 10 
        }}
        titleStyle={{ 
            fontWeight: '700' 
        }}
        buttonStyle={{
          backgroundColor: 'rgb(70,130,180)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 10,
          margin: 10,
          padding: 25
        }}
        containerStyle={{
            // backgroundColor: "gray",
            width: 170,
            height: 100,
            justifyContent: 'center',
            marginHorizontal: 10,
            marginVertical: 20,
        }}
      />
    )
}