import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function MoodButton({ title, buttonColor, target, colorValue, icon, iconFont, onBackgroundColorChange }) {

    const setLightColor = () => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: appConfig["lifx-url"] + appConfig.light.id + "/state",
                headers: {
                    Authorization: "Bearer " + appConfig["api-key"]
                },
                data: {
                    color: target,
                    brightness: 1.0
                }
            })
            .then((response) => {
                onBackgroundColorChange(colorValue, 3000);
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }   
    
    const run = async () => {
        try {
            await setLightColor();
        } catch (error) {
            Alert.alert("Oops! Something went wrong.");
            console.log(error);
        }
    }

    return (
        <Button
        onPress={() => run()}
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

        }}
        buttonStyle={{
          backgroundColor: buttonColor,
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
