import { fontFamily } from "@/src/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      blur: {
        position: "absolute",
        top: -200,
        opacity:0.9, 
        transform: [{ translateX: -150 }], 
        zIndex: -1,
    },
    blocoHeader:{
        width:343,
        alignSelf:"center",
        flexDirection:"row",
        marginTop:20,
        justifyContent:"space-between",
        alignItems:"center"
    },
    blocoBoasVindas:{},
    data:{
        color:"#7d7d7dff",
        fontSize:13,
        fontFamily:fontFamily.medium
    },
    textOla:{
        fontSize:24,
        fontFamily:fontFamily.medium,
        color:"#CFCFCF"
    },
    blocoButtonRegistro:{
         width:343,
         height:78,
         alignSelf:"center",
        backgroundColor:"#1A2632",
        borderWidth:1,
        borderColor:"#324A60",
        borderRadius:10,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        padding:20,
        marginTop:25
        },
    blocoRegistroText:{
        flexDirection:"row",
        gap:10,
        alignItems:"center"
    },
    registroButtonTitulo:{
        fontSize:16,
        color:"#FFFF",
        fontFamily:fontFamily.semibold,
    },
    registroButtonSubTitulo:{
         fontSize:9,
        color:"#91AAC5",
        fontFamily:fontFamily.medium,
    },
    blocoText:{
        gap:2
    }
})