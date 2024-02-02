import {StyleSheet, Text, View, ScrollView, Image, ImageBackground, Platform} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {SettingsDividerShort, SettingsSwitch,} from "react-native-settings-components";
import { SettingsContext } from '../Contexts/settingsContext';
import {ThemeContext} from "../Contexts/themeContext";

const AppSettings = () => {

    const { theme, setDark, setLight, isLight } = useContext(ThemeContext);
    const { settingsState, setSettingsState} = useContext(SettingsContext);
    const { allowPushNotifications } = settingsState;

    const onChangeLightMode = () => {
        if(!isLight){
            setLight();
        } else {
            setDark();
        }
    }

    const onChangeNotifications = () => {
        setSettingsState({
            ...settingsState,
            allowPushNotifications: !allowPushNotifications,
        });
    }

    return(
        <View style={[styles.container, {backgroundColor: theme.app.background}]}>

            <View style={styles.header}>
                <Text style={[styles.headerTitle, {color: theme.app.text}]}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollviewContainer}>

                <SettingsSwitch
                    containerStyle={[account.name, {backgroundColor: theme.settings.box}]}
                    titleStyle={[styles.settingText, { color: theme.app.text}]}
                    title={"Light Mode"}
                    value={isLight}
                    onValueChange={onChangeLightMode}>
                </SettingsSwitch>

                <SettingsDividerShort
                    dividerStyle={[dividerShort.line, {backgroundColor: theme.settings.divider1}]}
                    containerStyle={[dividerShort.container, {backgroundColor: theme.settings.divider2}]}
                    ios={true}>
                </SettingsDividerShort>

                <SettingsSwitch
                    containerStyle={[account.remember, {backgroundColor: theme.settings.box}]}
                    titleStyle={[styles.settingText, { color: theme.app.text}]}
                    title={"Show Notifications"}
                    value={allowPushNotifications}
                    onValueChange={onChangeNotifications}>
                </SettingsSwitch>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        minHeight: "100%",
    },
    container: {
        flex: 1,
        backgroundColor: "#000000",
        flexWrap: "nowrap",
        flexDirection: "column",
    },
    scrollviewContainer: {
        flex: 1,
        marginTop: "3%",
        flexDirection: "column",
    },
    header: {
        flex: 0.15,
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    headerTitle: {
        marginLeft: "5%",
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    showNotifications: {
        width: "90%",
        alignSelf: "center",
        marginTop: "2%",
        minHeight: 42,
        borderRadius: 11,
        backgroundColor: "#212124",
    },
    settingText: {
      color: "white",
    },
});

const account = StyleSheet.create({
    name: {
        width: "90%",
        minHeight: 42,
        alignSelf: "center",
        borderTopRightRadius: 11,
        borderTopLeftRadius: 11,
        backgroundColor: "#212124",
    },
    remember: {
        width: "90%",
        minHeight: 42,
        alignSelf: "center",
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        backgroundColor: "#212124",
    },
    switch: {
        width: "90%",
        alignSelf: "center",
        minHeight: 42,
        marginTop: "8%",
        borderTopRightRadius: 11,
        borderTopLeftRadius: 11,
        backgroundColor: "#212124",
    },
    Logout: {
        width: "90%",
        alignSelf: "center",
        minHeight: 42,
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        backgroundColor: "#212124",
    },
});

const dividerShort = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#212124",
    },
    line: {
        backgroundColor: "#515151",
        height: 0.3,
    },
});

export default AppSettings;