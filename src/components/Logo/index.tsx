import { StyleSheet, View } from "react-native";
import LogoIntrusivo from "../../assets/icons/logo.svg";

type LogoProps ={
    width?:number;
}

export default function Logo({width = 184}:LogoProps) {
    return (
        <View style={styles.blocoLogo}>
            <LogoIntrusivo width={width} height={100} />
        </View>
    );
}

const styles = StyleSheet.create({
    blocoLogo: {
        alignItems: "center",
        zIndex:2
    }
})