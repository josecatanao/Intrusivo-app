import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    blocoHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 21,
        borderBottomWidth: 1,
        borderColor: "#1B2C55",
        height: 80,
    },
    blur: {
        position: "absolute",
        top: -200,
        opacity: 0.6,
        transform: [{ translateX: -150 }],
        zIndex: -1,
    },
    blocoApresentacao: {
        width: 320,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 26
    },
    titulo: {
        fontSize: 23,
        color: colors.subTitle,
        fontFamily: fontFamily.semibold,
        marginTop: 8,
    },
    subtitulo: {
        textAlign: "center",
        fontFamily: fontFamily.regular,
        color: colors.subTitle1,
        marginTop: 13
    },
    blocoInputs: {
        alignSelf: "center",
        marginTop: 30,
        gap: 20,
        marginBottom: 35
    },
    label: {
        color: colors.light,
        fontFamily: fontFamily.semibold,
        fontSize: 15
    },
    blocoInput: {
        gap: 8
    },
    buttonCriarConta: {
        marginTop: 35,
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 60
    },
    textButtonCriarConta: {
        color: "#767C8A",
        fontFamily: fontFamily.medium,
        fontSize: 14
    },
    textButtonCriar: {
        color: "#197FE6",
        fontFamily: fontFamily.semibold,
        textDecorationLine: "underline"
    }
})