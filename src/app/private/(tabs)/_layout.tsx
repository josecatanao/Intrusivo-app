import { Tabs } from "expo-router";
import DiarioActive from "../../../assets/icons/tabBar/diario-active.svg";
import Diario from "../../../assets/icons/tabBar/diario.svg";
import HomeActive from "../../../assets/icons/tabBar/home-active.svg";
import Home from "../../../assets/icons/tabBar/home.svg";
import InsightsActive from "../../../assets/icons/tabBar/insights-active.svg";
import Insights from "../../../assets/icons/tabBar/insights.svg";
import PerfilActive from "../../../assets/icons/tabBar/perfil-active.svg";
import Perfil from "../../../assets/icons/tabBar/perfil.svg";


export default function StackLayout() {

    return (<Tabs screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#677688",
        tabBarStyle: {
            backgroundColor: "#111921",
            borderTopWidth: 1,
            borderColor: "#1B2C55",
            paddingTop:4,
            elevation: 0,
        },

    }} >
        <Tabs.Screen name="index" options={{ href: null }} />
        <Tabs.Screen
            name="home"
            options={{
                title: "Início",
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <HomeActive width={24} height={24} />
                    ) : (
                        <Home width={24} height={24} />
                    ),
            }}
        />
        <Tabs.Screen
            name="diario"
            options={{
                title: "Diário",
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <DiarioActive width={24} height={24} />
                    ) : (
                        <Diario width={24} height={24} />
                    ),
            }}
        />
        <Tabs.Screen
            name="insights"
            options={{
                title: "Insights",
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <InsightsActive width={24} height={24} />
                    ) : (
                        <Insights width={24} height={24} />
                    ),
            }}
        />
        <Tabs.Screen
            name="perfil"
            options={{
                title: "Perfil",
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <PerfilActive width={24} height={24} />
                    ) : (
                        <Perfil width={24} height={24} />
                    ),
            }}
        />
    </Tabs>)
}