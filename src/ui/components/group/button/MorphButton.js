import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function MorphButton({ icon, iconFont, onBackgroundColorChange }) {

    const morphEffect = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: appConfig["lifx-url"] + appConfig.light.id + "/effects/morph",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    period: 2,
                    duration: 10,
                    palette: ["red", "blue"]
                }
            }).then((response) => {
                console.log(response.data);
                resolve(response.data);
            }).catch((error) => {
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
                console.log(response);
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // const runPulse = async () => {
    //     let currColor = start_color;
    //     let count = 0;
    //     await pulseEffect();
    //     while (count < 15) {
    //         if (currColor === start_color) {
    //             onBackgroundColorChange(target_color) 
    //             currColor = target_color;
    //         } else {
    //             onBackgroundColorChange(start_color) 
    //             currColor = start_color;
    //         }
    //         count++;
    //         await sleep(1000);
    //     }
    //     onBackgroundColorChange("white"); 
    // }

    return (
        <Button
        onPress={() => morphEffect()}
        title="Annoy"
        icon={{
          name: icon,
          type: iconFont,
          size: 15,
          color: 'white',
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'blue',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    )
}