import { colors } from "@/src/theme/colors";
import { fontFamily } from "@/src/theme/fontFamily";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    line?: boolean
};

export default function SubButton({ title, onPress, disabled = false, style, line }: ButtonProps) {
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
            <Text style={[styles.titleButton, line && { textDecorationLine: "underline" },]}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "auto",
        height: 50,
        alignSelf: "center",

    },
    titleButton: {
        fontSize: 17,
        color: colors.SubButton,
        fontFamily: fontFamily.medium,
    }
})