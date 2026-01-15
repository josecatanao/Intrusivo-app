import Logo from "@/src/components/Logo";
import SubButton from "@/src/components/SubButton";
import ViewBackground from "@/src/components/ViewBackground";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import IconeGoogle from "../../assets/icons/icone-google.svg";
import Blur from "../../assets/images/blur.svg";
import { styles } from "./styles/login.styles";

export default function Login() {
    const router = useRouter();

    return (
        <ViewBackground>
            <Logo />
            <Blur style={styles.blur} />
            <View style={styles.blocoTitulo}>
                <Text style={styles.titulo}>Bem-vindo 👋</Text>
                <Text style={styles.subTitulo}>Acesse seu espaço seguro para continuar sua jornada de clareza.</Text>
            </View>
            <View style={styles.blocoEntrarAG}>
                <TouchableOpacity style={styles.buttonApple}>
                    <AntDesign name="apple" size={28} color="black" />
                    <Text style={styles.buttonTextApple}>Entrar com apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGoogle}>
                    <IconeGoogle />
                    <Text style={styles.buttonTextGoogle}>Entrar com apple</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.blocoEntrarComEmailSenha}>
                <MaterialIcons name="email" size={24} color="#91AAC5" />
                <SubButton title="Entrar com e-mail e senha" line={true} onPress={()=>router.push("./login-email-senha")}/>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={()=>router.push("./cadastro-conta")} style={styles.buttonCriarConta}>
                <Text style={styles.textButtonCriarConta}>Ainda não tem conta? <Text style={styles.textButtonCriar}>Criar conta</Text></Text>
            </TouchableOpacity>
        </ViewBackground>
    )
} 