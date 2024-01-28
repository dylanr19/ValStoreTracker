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
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollviewContainer}>

                <SettingsEditText
                    containerStyle={account.name}
                    titleStyle={styles.settingText}
                    title={"Account Name"}
                    value={"test"}>
                </SettingsEditText>

                <SettingsDividerShort
                    dividerStyle={dividerShort.line}
                    containerStyle={dividerShort.container}
                    ios={true}>
                </SettingsDividerShort>

                <SettingsSwitch
                    containerStyle={account.remember}
                    titleStyle={styles.settingText}
                    title={"Remember Account"}
                    value={true}>
                </SettingsSwitch>

                {/*<SettingsPicker*/}
                {/*    containerStyle={account.switch}*/}
                {/*    titleStyle={styles.settingText}*/}
                {/*    title={"Switch Accounts"}>*/}
                {/*</SettingsPicker>*/}

                {/*<SettingsDividerShort*/}
                {/*    dividerStyle={dividerShort.line}*/}
                {/*    containerStyle={dividerShort.container}*/}
                {/*    ios={true}>*/}
                {/*</SettingsDividerShort>*/}

                {/*<SettingsButton*/}
                {/*    containerStyle={account.Logout}*/}
                {/*    titleStyle={styles.settingText}*/}
                {/*    title={"Logout All"}>*/}
                {/*</SettingsButton>*/}

                <SettingsSwitch
                    containerStyle={styles.showNotifications}
                    titleStyle={styles.settingText}
                    title={"Show Notifications"}
                    value={true}>
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
        marginTop: "8%",
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