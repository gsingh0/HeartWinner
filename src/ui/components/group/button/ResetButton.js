import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { colorValues, colorsRGB, colorsName } from '../../../../enums/colors';

export default function ResetButton({ title, buttonColor, color, colorValue, icon, iconFont, onBackgroundColorChange }) {
    const [loading, setLoading] = useState(false);

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
                reject(error);
            });
        });
    }

    const setLightColor = async (targetcolor) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: appConfig["lifx-url"] + appConfig.light.id + "/state",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: targetcolor,
                    brightness: 1.0
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    } 

    const reset = async () => {
        try {
            setLoading(true)
            await effectsOff();
            await setLightColor(color);
            onBackgroundColorChange(colorValue, 3000);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Alert.alert("Oops! Something went wrong.");
            setLoading(false);
        }
    }

    return (
        <Button
        loading={loading}
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
          backgroundColor: "rgb(220,20,60)",
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 10,
          minHeight: 53
        }}
        containerStyle={{
          width: 150,
          marginHorizontal: 15,
          marginVertical: 20,
        }}
      />

    )
}
