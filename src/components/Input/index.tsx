import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";

type InputProps = {
    iconLeft: keyof typeof MaterialIcons.glyphMap;
    onChangeText: (text: string) => void;
    placeholder: string;
    senha?: boolean;
};

export default function Input({
    iconLeft,
    onChangeText,
    placeholder,
    senha = false,
}: InputProps) {

    const [verSenha, setVerSenha] = useState(false)

    return (
        <View style={styles.container}>
            <MaterialIcons name={iconLeft} size={22} color="#95AFCA" />

            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#95AFCA"
                secureTextEntry={senha && !verSenha}
                style={styles.input}
            />

            {senha && (
                <Pressable onPress={() => setVerSenha(prev => !prev)}>
                    <MaterialIcons name="remove-red-eye" size={22} color="#95AFCA" />
                </Pressable>
            )}
        </View>
    );
}
