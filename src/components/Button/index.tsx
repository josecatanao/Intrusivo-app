import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
};

export default function Button({ title, onPress, disabled = false, }: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.button,
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
        marginTop: 47,
        borderRadius: 10
    },
    titleButton: {
        fontSize: 17,
        color: colors.buttonTitle,
        fontFamily: fontFamily.medium
    }
})