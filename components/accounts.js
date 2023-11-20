import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, ImageBackground, TouchableHighlight} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Swipeable from 'react-native-swipeable';

const leftContent = <Text>Pull to activate</Text>;

const swipeButton = [
    <TouchableHighlight style={{ backgroundColor: "#d90429", height: "50%" }}>

        <Text
            style={{
                color: "white",
                fontWeight: "bold",
                marginTop: "5%",
                marginLeft: "2.5%"
        }}>Remove</Text>

    </TouchableHighlight>
];

const Accounts = () => {
    return(
        <View style={styles.page}>
            <View style={styles.container}>

                <View style={header.container}>
                    <Text style={header.title}>Accounts</Text>
                </View>

                <View style={styles.thinLine}></View>

                <ScrollView contentContainerStyle={accounts.container}>

                    <Swipeable
                        contentContainerStyle={accounts.accountContainer}
                        leftContent={leftContent}
                        rightButtons={swipeButton}>

                        <ImageBackground
                            style={[accounts.image, {borderWidth: 3, borderColor: "#55a630"}]}
                            source={{
                                uri: "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/wideart.png"
                            }}>
                            <Text style={accounts.text}>Turkwaz #olm3</Text>
                        </ImageBackground>

                    </Swipeable>

                    <Swipeable
                        contentContainerStyle={accounts.accountContainer}
                        leftContent={leftContent}
                        rightButtons={swipeButton}>

                        <ImageBackground
                            style={[accounts.image, {borderWidth: 0, borderColor: "#55a630"}]}
                            source={{
                                uri: "https://media.valorant-api.com/playercards/3432dc3d-47da-4675-67ae-53adb1fdad5e/wideart.png"
                            }}>
                            <Text style={accounts.text}>proman #EUWEST</Text>
                        </ImageBackground>

                    </Swipeable>

                    <Swipeable
                        contentContainerStyle={accounts.accountContainer}
                        leftContent={leftContent}
                        rightButtons={swipeButton}>

                            <ImageBackground
                                style={[accounts.image, {borderWidth: 0, borderColor: "#55a630"}]}
                                source={{
                                    uri: "https://media.valorant-api.com/playercards/475ce7c1-4ddc-63aa-7e22-54bb621d615b/wideart.png"
                                }}>
                                <Text style={accounts.text}>asdf #mikl</Text>
                            </ImageBackground>

                    </Swipeable>

                </ScrollView>

                <View style={styles.thinLine}></View>

                <View style={bottomButtons.container}>
                    <View style={bottomButtons.buttonContainer}>
                        <Ionicons name="ios-person-add-outline" size={30} color="white" />
                        <Text style={bottomButtons.text}>Add Account</Text>
                    </View>

                    <View style={bottomButtons.buttonContainer}>
                        <Ionicons style={bottomButtons.logoutIcon} name="ios-log-out-outline" size={30} color="white" />
                        <Text style={bottomButtons.text}>Logout from all Accounts</Text>
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
        marginBottom: "2%",
    },
    title: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: "bold",
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
        height: "50%",
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: "100%",
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

const bottomButtons = StyleSheet.create({
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