import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
};

export default function Button({ title, onPress, disabled = false,style }: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
                style,
                { opacity: pressed ? 0.6 : 1 },
            ]}
        >
            <Text style={styles.titleButton}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 322,
        height: 50,
        backgroundColor: colors.button,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    titleButton: {
        fontSize: 17,
        color: colors.buttonTitle,
        fontFamily: fontFamily.medium
    }
})