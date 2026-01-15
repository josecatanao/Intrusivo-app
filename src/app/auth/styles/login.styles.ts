import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    blur: {
        position: "absolute",
        top: -200,
        opacity:0.6, 
        transform: [{ translateX: -150 }], 
        zIndex: -1,
    },
    blocoTitulo:{
        gap:12
    },
    titulo:{
        fontSize:23,
        color:"#CBCBCB",
        fontFamily:fontFamily.semibold,
        alignSelf:"center",
    },
    subTitulo:{
        color:colors.subTitle1,
        fontSize:14,
        width:254,
        alignSelf:"center",
        textAlign:"center",
        fontFamily:fontFamily.regular
    },
    blocoEntrarAG:{
        marginTop:26,
        gap:16,
    },
    buttonApple:{
        width:322,
        height:50,
        backgroundColor:colors.light,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row",
        gap:10,
        alignSelf:"center",
        borderRadius:10
    },
    buttonTextApple:{
        fontSize:17,
        fontFamily:fontFamily.medium,
    },
      buttonGoogle:{
        width:322,
        height:50,
        backgroundColor:"#1A2632",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row",
        gap:10,
        alignSelf:"center",
        borderRadius:10
    },
    buttonTextGoogle:{
        fontSize:17,
        fontFamily:fontFamily.medium,
        color:colors.light
    },
    blocoEntrarComEmailSenha:{
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        gap:6,
        marginTop:66
    },
    line:{
        width:98,
        height:2,
        backgroundColor:"#365069",
        alignSelf:"center",
        marginTop:34
    },
    buttonCriarConta:{
        marginTop:35,
        flexDirection:"row",
        alignSelf:"center"
    },
    textButtonCriarConta:{
        color: "#767C8A",
        fontFamily:fontFamily.medium,
        fontSize:14
    },
    textButtonCriar:{
        color:"#197FE6",
        fontFamily:fontFamily.semibold,
        textDecorationLine: "underline"
    }
})