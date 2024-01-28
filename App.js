import {StyleSheet} from 'react-native';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import AuthProvider from "./components/auth";
import AppNavigator from "./components/AppNavigator";

export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        Oswald_400Regular,
    });

    if (!fontsLoaded && !fontError){
        return null;
    }

    return (
        <AuthProvider>
            <AppNavigator></AppNavigator>
        </AuthProvider>
    );
}