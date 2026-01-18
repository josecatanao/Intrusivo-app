import ViewBackground from "@/src/components/ViewBackground";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import IconeGravar from "../../../assets/icons/iconeGravar.svg";
import IconeModoRapido from "../../../assets/icons/iconeModoRapido.svg";
import IconeRegistro from "../../../assets/icons/iconeRegistro.svg";
import IconeStar from "../../../assets/icons/iconeStar.svg";
import Blur from "../../../assets/images/blur.svg";
import ImageFrase from "../../../assets/images/imageFrase.svg";
import { styles } from "./styles/home-styles";
export default function Home() {
    return (
        <ViewBackground>
            <Blur style={styles.blur} />
            <View style={styles.blocoHeader}>
                <View style={styles.blocoBoasVindas}>
                    <Text style={styles.data}>23 OUT, TERÇA</Text>
                    <Text style={styles.textOla}>Olá, José 👋</Text>
                </View>
                <TouchableOpacity>
                    <FontAwesome6 name="ellipsis-vertical" size={30} color="#626262" />
                </TouchableOpacity>
            </View>

            <View style={styles.blocoAcoesRapidas}>
                <TouchableOpacity style={styles.blocoButtonRegistro} onPress={()=>router.push("/private/diario/anotar-pensamento")}>
                    <View style={styles.blocoRegistroText}>
                        <IconeRegistro />
                        <View style={styles.blocoText}>
                            <Text style={styles.registroButtonTitulo}>Novo registro</Text>
                            <Text style={styles.registroButtonSubTitulo}>DESABAFAR OU ANOTAR</Text>
                        </View>
                    </View>
                    <FontAwesome5 name="arrow-right" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.blocoAcoes}>
                    <TouchableOpacity style={styles.buttonAcao}>
                        <IconeModoRapido />
                        <Text style={styles.textButtonAcao}>Modo Rápido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAcao}>
                        <IconeGravar />
                        <Text style={styles.textButtonAcao}>Gravar Áudio</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.blocoInsight}>
                <View style={styles.blocoTituloInsight}>
                    <Text style={styles.tituloInsight}>Insight do Dia</Text>
                    <IconeStar />
                </View>
                <View style={styles.blocoFraseInsight}>
                    <ImageFrase style={styles.bgSvg} />
                    <Text style={styles.fraseInsight}>“Perceba o pensamento, mas não se prenda a ele. Imagine-o como uma folha descendo um rio, passando por você sem parar.”</Text>
                </View>
            </View>
            <Blur style={styles.blurFooter} />
        </ViewBackground>
    )
}