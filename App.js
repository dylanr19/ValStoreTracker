import {StyleSheet} from 'react-native';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import AuthProvider from "./components/Contexts/authContext";
import SettingsProvider from "./components/Contexts/settingsContext";
import ThemeProvider from "./components/Contexts/themeContext";
import AppNavigator from "./components/Routing/AppNavigator";
import { LogBox } from 'react-native';

// Ignore specific warnings
LogBox.ignoreAllLogs(true);

// Ignore all warnings
console.disableYellowBox = true;



export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        Oswald_400Regular,
    });

    if (!fontsLoaded && !fontError){
        return null;
    }

    return (
        <ThemeProvider>
            <SettingsProvider>
                <AuthProvider>
                    <AppNavigator />
                </AuthProvider>
            </SettingsProvider>
        </ThemeProvider>
    );
}