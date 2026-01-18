import ViewBackground from "@/src/components/ViewBackground";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Blur from "../../../assets/images/blur.svg";
import { styles } from "./styles/anotar-pensamento.styles";
export default function AnotarPensamento(){
    return(
        <ViewBackground>
              <Blur style={styles.blur} />
            <View style={styles.blocoHeader}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome5 name="arrow-left" size={21} color="white" />
                </TouchableOpacity>
               <Text style={styles.tituloHeader}>Registro Essencial</Text>
                <View style={{ width: 24 }}></View>
            </View>
        </ViewBackground>
    )
}