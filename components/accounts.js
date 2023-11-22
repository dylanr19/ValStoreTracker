import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, ImageBackground, TouchableHighlight} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Swipeable from 'react-native-swipeable';

const leftContent = <Text>Pull to activate</Text>;

const swipeButton = [
    <TouchableHighlight style={{ height: 70 }}>

        <Text
            style={{
                color: "red",
                fontWeight: "bold",
                marginTop: 25,
                marginLeft: "2.5%",
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

                <View style={accounts.container}>
                    <ScrollView>

                        <Swipeable
                            contentContainerStyle={[accounts.accountContainer, {backgroundColor: "#363636"}]}
                            leftContent={leftContent}
                            rightButtons={swipeButton}>

                            <View style={[accounts.imageContainer, {}]}>
                                <ImageBackground
                                    style={[accounts.image, {}]}
                                    source={{
                                        uri: "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/displayicon.png"
                                    }}>
                                </ImageBackground>
                            </View>

                            <View style={accounts.textContainer}>
                                <Text style={[accounts.text, {color: "tomato"}]}>her jett</Text>
                                <Text style={[accounts.tag, {color: "gray"}]}>#luvu</Text>
                            </View>

                            <Ionicons
                                name="ios-arrow-forward"
                                size={22} color="gray"
                                style={{ display: "undefined" }}
                            />

                        </Swipeable>

                        <Swipeable
                            contentContainerStyle={[accounts.accountContainer, {backgroundColor: "rgb(25,25,25)"}]}
                            leftContent={leftContent}
                            rightButtons={swipeButton}>

                            <View style={[accounts.imageContainer, {}]}>
                                <ImageBackground
                                    style={[accounts.image, {}]}
                                    source={{
                                        uri: "https://media.valorant-api.com/playercards/475ce7c1-4ddc-63aa-7e22-54bb621d615b/wideart.png"
                                    }}>
                                </ImageBackground>
                            </View>

                            <View style={accounts.textContainer}>
                                <Text style={accounts.text}>Turkwaz</Text>
                                <Text style={accounts.tag}>#olm33</Text>
                            </View>

                            <Ionicons
                                name="ios-arrow-forward"
                                size={22} color="gray"
                                style={{ display: "undefined" }}
                            />

                        </Swipeable>

                        <Swipeable
                            contentContainerStyle={[accounts.accountContainer, {backgroundColor: "rgb(25,25,25)"}]}
                            leftContent={leftContent}
                            rightButtons={swipeButton}>

                            <View style={[accounts.imageContainer, {}]}>
                                <ImageBackground
                                    style={[accounts.image, {}]}
                                    source={{
                                        uri: "https://media.valorant-api.com/playercards/2ee6d025-4aac-3a67-0f6e-dba827acc75f/displayicon.png"
                                    }}>
                                </ImageBackground>
                            </View>

                            <View style={accounts.textContainer}>
                                <Text style={accounts.text}>PRNZE</Text>
                                <Text style={accounts.tag}>#7284</Text>
                            </View>

                            <Ionicons
                                name="ios-arrow-forward"
                                size={22} color="gray"
                                style={{ display: "undefined" }}
                            />

                        </Swipeable>

                    </ScrollView>
                </View>

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
        marginTop: "5%",
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
        marginTop: 10,
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
        flexDirection: "column",
    },
    accountContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        marginBottom: 20,
    },
    imageContainer: {
      width: "23%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        backgroundColor: "red"
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        width: "10%",
        marginLeft: "2%",
    },
    text: {
        fontSize: 16,
        color: "white",
    },
    tag: {
        fontSize: 13,
        color: "grey"
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