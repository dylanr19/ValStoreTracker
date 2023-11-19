import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, ImageBackground} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Accounts = () => {
    return(
        <View style={styles.page}>
            <View style={styles.container}>

                <View style={header.container}>
                    <Ionicons name="close-outline" size={40} color="white" />
                    <Text style={header.title}>Accounts</Text>
                </View>

                <View style={name.container}>
                    <Text style={name.text}>turkwaz #olm3</Text>
                </View>

                <View style={styles.thinLine}></View>

                <ScrollView contentContainerStyle={accounts.container}>
                    <View style={accounts.accountContainer}>
                        <ImageBackground
                            style={accounts.image}
                            source={{
                                uri: "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/wideart.png"
                            }}
                        ><Text style={accounts.text}>Turkwaz #olm3</Text></ImageBackground>
                    </View>

                    <View style={accounts.accountContainer}>
                        <ImageBackground
                            style={accounts.image}
                            source={{
                                uri: "https://media.valorant-api.com/playercards/3432dc3d-47da-4675-67ae-53adb1fdad5e/wideart.png"
                            }}
                        ><Text style={accounts.text}>proman #EUWEST</Text></ImageBackground>
                    </View>

                    <View style={accounts.accountContainer}>
                        <ImageBackground
                            style={accounts.image}
                            source={{
                                uri: "https://media.valorant-api.com/playercards/475ce7c1-4ddc-63aa-7e22-54bb621d615b/wideart.png"
                            }}
                        ><Text style={accounts.text}>asdf #mikl</Text></ImageBackground>
                    </View>

                </ScrollView>

                <View style={styles.thinLine}></View>

                <View style={buttons.container}>
                    <View style={buttons.buttonContainer}>
                        <Ionicons name="ios-person-add-outline" size={30} color="white" />
                        <Text style={buttons.text}>Add Account</Text>
                    </View>
                    <View style={buttons.buttonContainer}>
                        <Ionicons name="ios-person-remove-outline" size={30} color="white" />
                        <Text style={buttons.text}>Remove Account</Text>
                    </View>
                    <View style={buttons.buttonContainer}>
                        <Ionicons style={buttons.logoutIcon} name="ios-log-out-outline" size={30} color="white" />
                        <Text style={buttons.text}>Logout All Accounts</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#121212",
    },
    container: {
        flex: 1,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        marginTop: "10%",
        backgroundColor: "#121212"
    },
    thinLine: {
        marginBottom: "5%",
        width: "100%",
        height: "0.2%",
        backgroundColor: "#515151",
    },
});

const header = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: "row",
    },
    title: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "500",
        color: "white",
    },
});

const name = StyleSheet.create({
    container: {
        flex: 0.12,
        justifyContent: "flex-end",
        marginBottom: "3%",
    },
    text: {
        fontSize: 15,
        color: "#A9A9A9",
    },
});

const accounts = StyleSheet.create({
    container: {
        flex: 1,
    },
    accountContainer: {
        height: "30%",
        width: "100%",
        marginBottom: "5%",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: "90%",
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "white",
        backgroundColor: "rgba(38, 38, 38, 0.7)",
        padding: "1%",
    },
});

const buttons = StyleSheet.create({
    container: {
        flex: 0.5,
    },
    buttonContainer: {
        flexDirection: "row",
        marginBottom: "2%",
    },
    logoutIcon: {
        marginLeft: "1%",
        marginRight: "-1%"
    },
    text: {
        marginTop: "2%",
        marginLeft: "10%",
        color: "white",
        fontWeight: "500",
    },
});

export default Accounts;