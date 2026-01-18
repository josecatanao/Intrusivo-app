import { fontFamily } from "@/src/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    blur: {
        position: "absolute",
        top: -200,
        opacity: 0.6,
        transform: [{ translateX: -150 }],
        zIndex: -1,
    },
    blocoHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 21,
        height: 80,
    },
    tituloHeader: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: fontFamily.semibold
    }
})