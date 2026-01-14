import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";


export default function StackLayout() {

    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Italic": require("../../assets/fonts/Poppins-Italic.ttf"),
    });


    if (!fontsLoaded) return <Text>Caregando...</Text>;

    return <Stack screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="index" />
    </Stack>
}