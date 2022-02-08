import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { gray } from 'kleur';

export default function ToggleRepititionButton({ target_color, start_color, icon, iconFont, onBackgroundColorChange }) {

    const pulseEffect = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: appConfig["lifx-url"] + appConfig.light.id + "/effects/pulse",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: target_color,
                    from_color: start_color,
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

    const effectsOff = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: appConfig["lifx-url"] + appConfig.light.id + "/effects/off",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                }
            }).then((response) => {
                console.log(response.data);
                resolve(response.data);
            }).catch((error) => {
                Alert.alert(error);
                reject(error);
            });
        });
    }

    const runPulse = async () => {
        let currColor = start_color;
        let count = 0;
        await pulseEffect();
        while (count < 15) {
            if (currColor === start_color) {
                onBackgroundColorChange(target_color) 
                currColor = target_color;
            } else {
                onBackgroundColorChange(start_color) 
                currColor = start_color;
            }
            count++;
            await sleep(1000);
        }
        onBackgroundColorChange("white"); 
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
          backgroundColor: 'blue',
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