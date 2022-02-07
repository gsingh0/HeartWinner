import { ScrollView, Text } from "react-native";
import ButtonGroup from "../../components/group/ButtonGroup";
import styles from "./home.styles";

export default function Home() {
    return (
        <ScrollView style={styles.home}>
            <ButtonGroup />
        </ScrollView>
    )
}