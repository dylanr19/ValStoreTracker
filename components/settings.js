import {StyleSheet, Text, View, ScrollView, Image, ImageBackground, Platform} from 'react-native';
import {useState} from "react";
import {
    SettingsDividerShort,
    SettingsDividerLong,
    SettingsEditText,
    SettingsCategoryHeader,
    SettingsSwitch,
    SettingsPicker,
    SettingsTextLabel, SettingsButton
} from "react-native-settings-components";


const AppSettings = () => {
    const [state, setState] = useState({
        username: " ",
        allowPushNotifications: false,
        gender: " "
    });

    const { username, allowPushNotifications, gender } = state;

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <SettingsCategoryHeader title={"Settings"} titleStyle={styles.headerTitle}></SettingsCategoryHeader>
            </View>

            <ScrollView contentContainerStyle={styles.scrollviewContainer}>
                <SettingsEditText containerStyle={styles.AccountName} titleStyle={styles.settingText} title={"Account Name"} value={"turkwaz33"}></SettingsEditText>
                <SettingsDividerShort dividerStyle={styles.dividerShortLine} containerStyle={styles.dividerShort} ios={true}></SettingsDividerShort>
                <SettingsSwitch containerStyle={styles.rememberAccount} titleStyle={styles.settingText} title={"Remember Account"} value={true}></SettingsSwitch>
                <SettingsPicker containerStyle={styles.switchAccounts} titleStyle={styles.settingText} title={"Switch Accounts"}></SettingsPicker>
                <SettingsDividerShort dividerStyle={styles.dividerShortLine} containerStyle={styles.dividerShort} ios={true}></SettingsDividerShort>
                <SettingsButton containerStyle={styles.Logout} titleStyle={styles.settingText} title={"Logout All"}></SettingsButton>

                <SettingsSwitch containerStyle={styles.showNotifications} titleStyle={styles.settingText} title={"Show Notifications"} value={true}></SettingsSwitch>
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
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
    AccountName: {
        width: "90%",
        minHeight: 42,
        alignSelf: "center",
        borderTopRightRadius: 11,
        borderTopLeftRadius: 11,
        backgroundColor: "#212124",
    },
    rememberAccount: {
        width: "90%",
        minHeight: 42,
        alignSelf: "center",
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        backgroundColor: "#212124",
    },
    switchAccounts: {
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
    showNotifications: {
        width: "90%",
        alignSelf: "center",
        marginTop: "8%",
        minHeight: 42,
        borderRadius: 11,
        backgroundColor: "#212124",
    },
    settingText: {
      color: "white",
    },
    dividerShort: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#212124",
    },
    dividerShortLine: {
        backgroundColor: "#515151",
        height: 0.3,
    },
});

export default AppSettings;