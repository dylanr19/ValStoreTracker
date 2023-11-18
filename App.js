import {StyleSheet} from 'react-native';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {Ionicons} from '@expo/vector-icons';
import AppSettings from "./components/settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Bundle from "./components/Bundle";
import Daily from "./components/daily";
import Search from "./components/search";
import WishList from "./components/wish-list";

const Tab = createBottomTabNavigator();

function MyTabs(){

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Bundle') {
                        iconName = 'basket-outline';
                    }
                    else if (route.name === 'Daily') {
                        iconName = 'calendar'
                    }
                    else if (route.name === 'Search') {
                        iconName = 'search'
                    }
                    else if (route.name === 'Wish List') {
                        iconName = 'heart'
                    }
                    else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: styles.footer,
                headerStyle: styles.header,
            })}
        >
            <Tab.Screen name="Bundle" component={Bundle} />
            <Tab.Screen name="Daily" component={Daily} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Wish List" component={WishList} />
            <Tab.Screen name="Settings" component={AppSettings} />
        </Tab.Navigator>
    );
}

export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        Oswald_400Regular,
    });

    if (!fontsLoaded && !fontError){
        return null;
    }

    return (
      <NavigationContainer>
              <MyTabs></MyTabs>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  page: {
    minHeight: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  header: {
    height: 0,
  },
  footer: {
      backgroundColor: "#363636",
      borderTopWidth: 0,
  },
});