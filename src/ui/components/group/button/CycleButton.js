import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { colorValues, colorsRGB, colorsName } from '../../../../enums/colors';
import getRandomInt from '../../../../api/Random';

export default function CycleButton({ icon, iconFont, onBackgroundColorChange }) {

    const cycle = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: appConfig["lifx-url"] + appConfig.light.id + "/cycle",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    states: [
                        {
                            color: colorsName.RED
                        },
                        {
                            color: colorsName.BLUE
                        },
                        {
                            color: colorsName.PINK
                        },
                        {
                            color: colorsName.ORANGE
                        },
                        {
                            color: colorsName.GREEN
                        },
                        {
                            color: colorsName.YELLOW
                        },
                    ],
                    defaults: {
                        duration: 2.0
                    }
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    const setLightState = (color) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: appConfig["lifx-url"] + appConfig.light.id + "/state",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: color
                }
            }).then((response) => {
                resolve(response);
             }).catch((error) => {
                 reject(error);
             });
        });
    }

    const runCycle = async () => {
        try {
            let count = 0;
            while (count < 15) {
                await cycle();
                // not possible to sync light color with background color because
                // api sends back hsl rep. when need rgb rep. So use randNum(0, 8)
                let randValue = getRandomInt(9);
                console.log(randValue);
                onBackgroundColorChange(randValue, 100);
                count++;
                sleep(1000);
            }
            await setLightState(colorsName.WHITE);
            onBackgroundColorChange(colorValues.WHITE, 3000);
        } catch (error) {
            Alert.alert("Oops! Something went wrong");
        }
        
    }

    return (
        <Button
        onPress={() => runCycle()}
        title="Confuse"
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
        }}
        buttonStyle={{
            backgroundColor: 'purple',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 10,
            margin: 10,
            padding: 25
        }}
        containerStyle={{
            width: 170,
            height: 100,
            justifyContent: 'center',
            marginHorizontal: 10,
            marginVertical: 20,
        }}
      />
    )
}