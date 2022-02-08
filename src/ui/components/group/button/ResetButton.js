import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { colorValues, colorsRGB, colorsName } from '../../../../enums/colors';

export default function ResetButton({ title, buttonColor, color, colorValue, icon, iconFont, onBackgroundColorChange }) {

    const effectsOff = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: appConfig["lifx-url"] + appConfig.light.id + "/effects/off",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                Alert.alert(error);
                reject(error);
            });
        });
    }

    const setLightColor = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: appConfig["lifx-url"] + appConfig.light.id + "/state",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: color,
                    brightness: 1.0
                }
            }).then((response) => {
                onBackgroundColorChange(colorValue, 1000);
                resolve(response.data);
            }).catch((error) => {
                Alert.alert(error);
                reject(error);
            });
        });
    } 

    const reset = async () => {
        try {
            await setLightColor();
            await effectsOff();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Button
        onPress={() => reset()}
        title={title}
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
            fontWeight: '700',
            justifyContent: 'center',
            width: 75,
            fontSize: 15
        }}
        buttonStyle={{
          backgroundColor: buttonColor,
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 10,
        }}
        containerStyle={{
          width: 150,
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      />

    )
}
