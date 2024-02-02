import React, {useContext, useEffect, useState} from 'react';
import {Ionicons} from "@expo/vector-icons";
import Shop from "../Store/shop";
import Accounts from "../Account/accounts";
import Search from "../Account/search";
import AppSettings from "../Settings/settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Login from "../Login/login";
import {AuthContext} from "../Contexts/authContext";
import {SettingsContext} from "../Contexts/settingsContext";
import {ThemeContext} from "../Contexts/themeContext";

const Tab = createBottomTabNavigator();

function TabNavigator(){

    const { theme } = useContext(ThemeContext);

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
                tabBarActiveTintColor: theme.tabBar.activeIcon,
                tabBarInactiveTintColor: theme.tabBar.icon,
                tabBarStyle: { backgroundColor: theme.tabBar.background, borderTopWidth: 0, },
                headerStyle: { height: 0, },
            })}
        >
            <Tab.Screen name="Store" component={Shop} />
            <Tab.Screen name="Account" component={Accounts} />
            <Tab.Screen name="Loadout" component={Search} />
            <Tab.Screen name="Settings" component={AppSettings}/>

        </Tab.Navigator>
    );
}

const AppNavigator = () => {
    const { authState } = useContext(AuthContext);

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