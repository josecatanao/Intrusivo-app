import { fontFamily } from "@/src/theme/fontFamily"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    input:{
        flex: 1,
        color:"#83b4e7ff",
        fontSize:16,
        marginLeft: 12,
        fontFamily:fontFamily.medium,
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        width:322,
        paddingHorizontal: 16,
        height:55,
        backgroundColor:"#1A2632",
        borderWidth:1,
        borderColor:"#324A60",
        borderRadius:10,
    }
})