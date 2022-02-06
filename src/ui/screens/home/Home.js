import { View, Text } from "react-native";
import ButtonGroup from "../../components/group/button/ButtonGroup";
import styles from "./home.styles";

export default function Home() {
    return (
        <View style={styles.home}>
            <ButtonGroup />
        </View>
    )
}