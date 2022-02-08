import { Button } from 'react-native-elements';
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../api/Thread.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export default function ResetButton({ title, buttonColor, color, icon, iconFont, onBackgroundColorChange }) {

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
                onBackgroundColorChange(color);
                resolve(response.data);
            }).catch((error) => {
                Alert.alert(error);
                reject(error);
            });
        });
    }    

    return (
        <Button
        onPress={() => setLightColor()}
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
