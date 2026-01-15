import { colors } from "@/src/theme/colors"
import { fontFamily } from "@/src/theme/fontFamily"
import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    blur: {
        position: "absolute",
        top: -200,
        opacity: 0.6,
        transform: [{ translateX: -150 }],
        zIndex: -1,
    },
    blocoTitulo: {
        gap: 12
    },
    titulo: {
        fontSize: 23,
        color: "#CBCBCB",
        fontFamily: fontFamily.semibold,
        alignSelf: "center",
    },
    subTitulo: {
        color: colors.subTitle1,
        fontSize: 14,
        width: 300,
        alignSelf: "center",
        textAlign: "center",
        fontFamily: fontFamily.regular
    },
    blocoInput: {
        alignSelf: "center",
        gap: 22,
        marginTop: 43
    },
    blocoSubButton: {
        alignSelf: "flex-end",
        width: 200,

    },
    blocoEntrarAG: {
        marginTop: 26,
        gap: 16,
    },
    buttonApple: {
        width: 322,
        height: 50,
        backgroundColor: colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        gap: 10,
        alignSelf: "center",
        borderRadius: 10
    },
    buttonTextApple: {
        fontSize: 17,
        fontFamily: fontFamily.medium,
    },
    buttonGoogle: {
        width: 322,
        height: 50,
        backgroundColor: "#1A2632",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        gap: 10,
        alignSelf: "center",
        borderRadius: 10
    },
    buttonTextGoogle: {
        fontSize: 17,
        fontFamily: fontFamily.medium,
        color: colors.light
    },
    line: {
        width: 96,
        height: 2,
        backgroundColor: "#365069",
        alignSelf: "center",
    },
    blocoSeparador:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:14,
        marginTop:38
    },
    TextLine:{
        color:"#8FA9C2",
        fontFamily:fontFamily.medium,
    },
    textButtonCriarConta:{
        color: "#767C8A",
        fontFamily:fontFamily.medium,
        fontSize:14
    },
        buttonCriarConta:{
        marginTop:35,
        flexDirection:"row",
        alignSelf:"center"
    },
     textButtonCriar:{
        color:"#197FE6",
        fontFamily:fontFamily.semibold,
        textDecorationLine: "underline"
    }
})