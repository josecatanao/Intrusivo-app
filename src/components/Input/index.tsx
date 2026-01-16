import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";

type InputProps = {
  iconLeft: React.ComponentType<any>;
  iconName: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  senha?: boolean;
  width?:number;
};

export default function Input({
  iconLeft: IconLeft,
  iconName,
  onChangeText,
  placeholder,
  width=322,
  senha = false,
}: InputProps) {
  const [verSenha, setVerSenha] = useState(false);

  return (
    <View style={[styles.container,{width:width}]}>
      <IconLeft name={iconName} size={22} color="#768DA4" />

      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#95AFCA"
        secureTextEntry={senha && !verSenha}
        style={styles.input}
      />

      {senha && (
        <Pressable onPress={() => setVerSenha(prev => !prev)}>
          <MaterialIcons
            name={verSenha ? "visibility-off" : "visibility"}
            size={22}
            color="#95AFCA"
          />
        </Pressable>
      )}
    </View>
  );
}
