import React, {useContext} from 'react';
import {View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Shop from "./shop";
import Accounts from "./accounts";
import Search from "./search";
import WishList from "./wish-list";
import AppSettings from "./settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./login";
import {Auth} from "./auth";

const Tab = createBottomTabNavigator();

function TabNavigator(){

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Store') {
                        iconName = 'basket-outline';
                    }
                    else if (route.name === 'Account') {
                        iconName = 'person-circle-outline'
                    }
                    else if (route.name === 'Loadout') {
                        iconName = 'search'
                    }
                    else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: "#363636", borderTopWidth: 0, },
                headerStyle: { height: 0, },
            })}
        >
            <Tab.Screen name="Store" component={Shop} />
            <Tab.Screen name="Account" component={Accounts} />
            <Tab.Screen name="Loadout" component={Search} />
            {/*<Tab.Screen name="Wish List" component={WishList} />*/}
            <Tab.Screen name="Settings" component={AppSettings}/>

        </Tab.Navigator>
    );
}

const AppNavigator = () => {
    const { authState } = useContext(Auth);

    return(
        <NavigationContainer>
            {(authState["isSigned"] === false)
                ? <Login></Login>
                : <TabNavigator></TabNavigator>
            }
        </NavigationContainer>
    );
}

export default AppNavigator;