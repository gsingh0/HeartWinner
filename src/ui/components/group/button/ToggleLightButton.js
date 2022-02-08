import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function ToggleLightButton({ icon, iconFont, onBackgroundColorChange }) {
    const [lightStateText, setLightStateText] = useState("LOADING...");

    const togglePower = async () => {
        let data = await getLightState();
        if (data.length > 0) {
            let light = data[0];
            await sleep(3000);
            if (light.power === "on") {
                await setLightState("off");
                onBackgroundColorChange("white");
            } else {
                await setLightState("on");
                onBackgroundColorChange("yellow");
            }
        }
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
                reject(error);
            });
        });
    }
    
    const setLightState = (state) => {
        axios({
            method: 'put',
            url: appConfig["lifx-url"] + appConfig.light.id + "/state",
            headers: {
                Authorization: "Bearer " + appConfig["api-key"]
            },
            data: {
                power: state
            }
        }).then((response) => {
            console.log("power turned " + state);
            setLightStateText("LIGHT: " + state.toUpperCase());
         });
    }

    useEffect(async () => {
        try {
            let lightState = await getLightState();
            console.log(lightState[0].power);
            setLightStateText("LIGHT: " + lightState[0].power.toUpperCase());
            if (lightState[0].power === 'on') {
                onBackgroundColorChange("yellow");
            } else {
                onBackgroundColorChange("white");
            }
        } catch (error) {
            Alert.alert("error: " + error);
        }
    }, []);

    return (
        <Button
        onPress={() => togglePower()}
        title={lightStateText}
        icon={{
          name: icon,
          type: iconFont,
          size: 15,
          color: 'white',
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
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