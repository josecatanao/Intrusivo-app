import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import Logo from "@/src/components/Logo";
import SubButton from "@/src/components/SubButton";
import ViewBackground from "@/src/components/ViewBackground";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import IconeGoogle from "../../assets/icons/icone-google.svg";
import Blur from "../../assets/images/blur.svg";
import { styles } from "./styles/login-email-senha.styles";

export default function LoginEmailSenha() {
    return (
        <ViewBackground>
            <Logo />
            <Blur style={styles.blur} />
            <View style={styles.blocoTitulo}>
                <Text style={styles.titulo}>Bem-vindo de volta 👋</Text>
                <Text style={styles.subTitulo}>Faça login para acessar seu diário seguro.</Text>
            </View>
            <View style={styles.blocoInput}>
                <Input onChangeText={() => ""} placeholder="Digite seu e-mail" iconLeft="email" />
                <Input onChangeText={() => ""} placeholder="Digite sua senha" iconLeft="lock" senha={true} />
                <View style={styles.blocoSubButton}>
                    <SubButton title="Esqueceu sua senha?" />
                </View>
            </View>
            <Button title="Entrar" />

            <View style={styles.blocoSeparador}>
                <View style={styles.line}></View>
                <Text style={styles.TextLine}>OU ENTRE COM</Text>
                <View style={styles.line}></View>
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

            <TouchableOpacity onPress={() => router.push("./cadastro-conta")} style={styles.buttonCriarConta}>
                <Text style={styles.textButtonCriarConta}>Ainda não tem conta? <Text style={styles.textButtonCriar}>Criar conta</Text></Text>
            </TouchableOpacity>

        </ViewBackground>
    )
} 