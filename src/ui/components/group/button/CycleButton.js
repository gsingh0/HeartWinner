import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

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
                            color: "red"
                        },
                        {
                            color: "blue"
                        },
                        {
                            color: "pink"
                        },
                        {
                            color: "orange"
                        },
                        {
                            color: "green"
                        },
                        {
                            color: "yellow"
                        },
                    ],
                    defaults: {
                        duration: 2.0
                    }
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                Alert.alert(error);
                reject(error);
            });
        });
    }

    const getLightState = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: appConfig["lifx-url"] + appConfig.light.id,
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
                 Alert.alert(error);
                 console.log(error);
                 reject(error);
             });
        });
    }

    const runCycle = async () => {
        let count = 0;
        while (count < 15) {
            await cycle();
            let light = await getLightState();
            let color = light[0].color;
            onBackgroundColorChange(color);
            count++;
            console.log("count: " + count + "; color: " + color);
            console.log(light);
            sleep(1000);
        }
        await setLightState("white");
        onBackgroundColorChange("white");
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