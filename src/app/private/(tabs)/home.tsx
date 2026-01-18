import ViewBackground from "@/src/components/ViewBackground";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, TouchableOpacity, View } from "react-native";
import IconeRegistro from "../../../assets/icons/iconeRegistro.svg";
import Blur from "../../../assets/images/blur.svg";
import { styles } from "./styles/home-styles";
export default function Home(){
    return(
        <ViewBackground>
             <Blur style={styles.blur} />
             <View style={styles.blocoHeader}>
                <View style={styles.blocoBoasVindas}>
                    <Text style={styles.data}>23 OUT, TERÇA</Text>
                    <Text style={styles.textOla}>Olá, José</Text>
                </View>
                <TouchableOpacity>
                    <FontAwesome6 name="ellipsis-vertical" size={30} color="#626262" />
                </TouchableOpacity>
             </View>

            <TouchableOpacity style={styles.blocoButtonRegistro}>
                <View style={styles.blocoRegistroText}>
                    <IconeRegistro />
                    <View style={styles.blocoText}>
                        <Text style={styles.registroButtonTitulo}>Novo registro</Text>
                        <Text style={styles.registroButtonSubTitulo}>DESABAFAR OU ANOTAR</Text>
                    </View>
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="white" />
            </TouchableOpacity>


        </ViewBackground>
    )
}