import { useState } from "react";
import { ScrollView, Text } from "react-native";
import ButtonGroup from "../../components/group/ButtonGroup";
import styles from "./home.styles";

export default function Home() {
    const [style, setStyle] = useState(styles.home);

    const updateBackgroundColor = (color) => {
        setStyle({
            position: 'relative',
            flex: 1,
            backgroundColor: color
          })
    }

    return (
        <ScrollView style={style}>
            <ButtonGroup onBackgroundColorChange={(color) => updateBackgroundColor(color)} />
        </ScrollView>
    )
}