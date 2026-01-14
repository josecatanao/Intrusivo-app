import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    blocoFotos: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: 41,
    },
    titulo: {
        color: colors.light,
        fontFamily: fontFamily.semibold,
        fontSize: 32,
        width: 256,
        textAlign: "center",
        alignSelf: "center",
        marginTop: 36
    },
    subTitle: {
        color: colors.subTitle,
        fontFamily: fontFamily.regular,
        textAlign: "center",
        alignSelf: "center",
        width: 321,
        marginTop: 16,
    }
})