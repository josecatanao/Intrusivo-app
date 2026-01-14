import { StyleSheet, View } from "react-native";
import LogoIntrusivo from "../../assets/icons/logo.svg";

export default function Logo() {
    return (
        <View style={styles.blocoLogo}>
            <LogoIntrusivo width={184} height={100} />
        </View>
    );
}

const styles = StyleSheet.create({
    blocoLogo: {
        alignItems: "center",
        zIndex:2
    }
})