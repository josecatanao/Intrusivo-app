import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./styles";

type Background = {
    children?:ReactNode;
} 

export default function ViewBackground({children}:Background){
    return (<SafeAreaView style={Styles.Component}>
                {children}
           </SafeAreaView>
    )
}