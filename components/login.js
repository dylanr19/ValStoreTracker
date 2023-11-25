import React from "react";
import {View, StyleSheet, TextInput, Button, Text} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {Ionicons} from "@expo/vector-icons";

const Login = () => {
    const onChangeText = () => {}
    const onPressLearnMore = () => {}

    const onTest = () => {

    }

    const regions = [
        { label: "Asia", value: "AP" },
        { label: "Brazil", value: "BR" },
        { label: "Europe", value: "EU" },
        { label: "Korea", value: "KR" },
        { label: "Latin America", value: "LATAM" },
        { label: "North America", value: "NA" },
    ];

    return(
        <View style={styles.page}>

            <View style={styles.loginContainer}>

                <Text style={styles.loginTitle}>Login</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={" Riot Username"}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={" Riot Password"}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={onPressLearnMore}
                        title="Login"
                        color="white"
                    />
                </View>

                <Dropdown
                    data={regions}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Region"
                    onChange={onTest}
                    renderLeftIcon={() => (
                        <Ionicons
                            name="earth-outline"
                            size={20}
                            color="gray" />
                    )}
                    selectedTextStyle={styles.dropDownText}
                    placeholderStyle={styles.dropDownText}
                    iconColor="tomato"
                ></Dropdown>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#121212",
    },
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        // backgroundColor: "green"
    },
    loginTitle: {
        flex: 0.08,
        fontSize: 40,
        color: "white",
    },
    input: {
        flex: 0.05,
        color: "gray",
        borderStyle: "solid",
        borderColor: "gray",
        borderBottomWidth: 1,
        marginBottom: "5%",
    },
    buttonContainer: {
        flex: 0.055,
        padding: 5,
        backgroundColor: "tomato",
        borderStyle: "solid",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    dropDownText: {
        color: "gray",
        marginLeft: "1%",
        fontSize: 15,
    },
});

export default Login;