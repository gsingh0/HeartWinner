import axios from "axios";
import { Button, Pressable, View, Text, TouchableOpacity } from "react-native";
import styles from "./button.group.js";
import appConfig from "../../../../config/application-configuration.json";
import sleep from "../../../../functions/Thread.js";

export default function ButtonGroup() {

    const togglePower = async () => {
        let data = await getLightState();
        if (data.length > 0) {
            let light = data[0];
            await sleep(3000);
            if (light.power === "on") {
                setLightState("off");
            } else {
                setLightState("on");
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
         });
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={togglePower}>
                <Text style={styles.text}>Click me</Text>
            </TouchableOpacity>
        </View>
    )
}