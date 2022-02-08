import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { colorValues, colorsRGB, colorsName } from '../../../../enums/colors';

export default function ToggleLightButton({ icon, iconFont, onBackgroundColorChange }) {
    const [lightStateText, setLightStateText] = useState("LOADING...");
    const [loading, setLoading] = useState(true);

    const togglePower = async () => {
        setLoading(true);
        let data = await getLightState();
        if (data.length > 0) {
            let light = data[0];
            await sleep(3000);
            if (light.power === "on") {
                await setLightState("off");
                setLoading(false);
                onBackgroundColorChange(colorValues.BLACK, 0);
            } else {
                await setLightState("on");
                setLoading(false);
                onBackgroundColorChange(colorValues.WHITE, 0);
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
                Alert.alert(error);
                reject(error);
            });
        });
    }
    
    const setLightState = (state) => {
        return new Promise((resolve, reject) => {
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
                resolve(response);
             }).catch((error) => {
                 Alert.alert(error);
                 console.log(error);
                 reject(error);
             });
        });
    }

    useEffect(async () => {
        try {
            setLoading(true);
            let lightState = await getLightState();
            console.log(lightState[0].power);
            setLightStateText("LIGHT: " + lightState[0].power.toUpperCase());
            setLoading(false);
            if (lightState[0].power === 'on') {
                onBackgroundColorChange(colorValues.WHITE, 0);
            } else {
                onBackgroundColorChange(colorValues.BLACK, 0);
            }
        } catch (error) {
            Alert.alert("error: " + error);
        }
    }, []);

    return (
        <Button
        loading={loading}
        onPress={() => togglePower()}
        title={lightStateText}
        icon={{
          name: icon,
          type: iconFont,
          size: 20,
          color: 'white',
        }}
        iconContainerStyle={{ 
            marginRight: 10,
        }}
        titleStyle={{ 
            fontWeight: '700',
            justifyContent: 'center',
            width: 75,
            fontSize: 15
            // flexWrap: 'wrap'
        }}
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
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