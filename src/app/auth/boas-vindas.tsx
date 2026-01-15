import Button from "@/src/components/Button";
import Logo from "@/src/components/Logo";
import SubButton from "@/src/components/SubButton";
import ViewBackground from "@/src/components/ViewBackground";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Blur from "../../assets/images/blur.svg";
import Brain from "../../assets/images/brain.svg";
import { styles } from "./styles/boas-vindas.styles";


export default function BoasVindas() {
    const router = useRouter();

    return (
        <ViewBackground>
            <Logo />
            <View style={styles.blocoFotos}>
                <Blur style={{ position: "absolute" }} />
                <Brain />
            </View>
            <Text style={styles.titulo}>Sua mente, seu espaço.</Text>
            <Text style={styles.subTitle}>Um diário seguro para entender e gerenciar pensamentos intrusivos com a ajuda da IA. Bem-vindo ao Intrusivo.</Text>

            <Button style={{marginTop:47}} title="Começar Jornada" onPress={()=>router.push("./login")}/>
            <SubButton title="Já tenho conta" onPress={()=>router.push("./login-email-senha")} line={true} style={{marginTop:32}} />

        </ViewBackground>
    )
} 