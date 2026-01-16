import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import Logo from "@/src/components/Logo";
import ViewBackground from "@/src/components/ViewBackground";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import IconeUser from "../../assets/icons/iconeUser.svg";
import Blur from "../../assets/images/blur.svg";
import { styles } from "./styles/cadastro-conta.styles";

export default function CadastroConta() {
    return (
        <ViewBackground>
           
            <Blur style={styles.blur} />
            <View style={styles.blocoHeader}>
                <TouchableOpacity onPress={() => router.back()}>
                    <FontAwesome5 name="arrow-left" size={21} color="white" />
                </TouchableOpacity>
                <Logo width={119} />
                <View style={{ width: 24 }}></View>
            </View>
             <ScrollView>
            <View style={styles.blocoApresentacao}>
                <IconeUser />
                <Text style={styles.titulo}>Crie sua conta</Text>
                <Text style={styles.subtitulo}>Comece sua jornada de autoconhecimento com seu diário seguro.</Text>
            </View>

            <View style={styles.blocoInputs}>
                <View style={styles.blocoInput}>
                    <Text style={styles.label}>Nome</Text>
                    <Input
                        onChangeText={() => ""}
                        placeholder="Como gostaria de ser chamado?"
                        iconLeft={FontAwesome6}
                        width={339}
                        iconName="user-large" />
                </View>
                <View style={styles.blocoInput}>
                    <Text style={styles.label}>E-mail</Text>
                    <Input
                        onChangeText={() => ""}
                        placeholder="seu@email.com"
                        iconLeft={MaterialIcons}
                        width={339}
                        iconName="email" />
                </View>
                <View style={styles.blocoInput}>
                    <Text style={styles.label}>Senha</Text>
                    <Input
                        onChangeText={() => ""}
                        placeholder="Mínimo de 8 caracteres"
                        iconLeft={MaterialIcons}
                        width={339}
                        senha={true}
                        iconName="lock" />
                </View>
                <View style={styles.blocoInput}>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <Input
                        onChangeText={() => ""}
                        placeholder="Repita sua senha"
                        iconLeft={MaterialIcons}
                        width={339}
                        senha={true}
                        iconName="lock-reset" />
                </View>
            </View>

            <Button width={339} title="Cadastrar" />

            <TouchableOpacity onPress={() => router.push("./login-email-senha")} style={styles.buttonCriarConta}>
                <Text style={styles.textButtonCriarConta}>Já possui uma conta? <Text style={styles.textButtonCriar}>Entrar</Text></Text>
            </TouchableOpacity>
            </ScrollView>
        </ViewBackground>
    )
} 