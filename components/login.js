import React, {useEffect, useState, useContext} from "react";
import {View, StyleSheet, TextInput, Button, Text, SafeAreaView} from "react-native";
import { WebView } from 'react-native-webview';
import 'react-native-url-polyfill/auto';
import {Dropdown} from "react-native-element-dropdown";
import {Ionicons} from "@expo/vector-icons";
import {Auth} from "./auth";

const Login = () => {
    const [value, setValue] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [region, setRegion] = useState('');

    const { login, authState } = useContext(Auth);

    function getToken(url, tokenName) {
        const params = new URLSearchParams(url.split("#")[1]);
        return params.get(tokenName);
    }

    const handleNavigationStateChange = (navState) => {
        const accessToken = getToken(navState.url, "access_token");
        const idToken = getToken(navState.url, "id_token");

        login(accessToken, idToken);
    };

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#45474B' }}>
            <WebView
                userAgent={'Chrome'}
                setSupportMultipleWindows={false}
                onNavigationStateChange={handleNavigationStateChange}
                javaScriptEnabled={true}
                source={{ uri: 'https://authenticate.riotgames.com/?client_id=play-valorant-web-prod&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dplay-valorant-web-prod%26nonce%3D1%26redirect_uri%3Dhttps%253A%252F%252Fplayvalorant.com%252Fopt_in%26response_type%3Dtoken%2520id_token%26scope%3Daccount%2520openid' }}>
            </WebView>
        </SafeAreaView>
        // <View style={styles.page}>
        //
        //     <View style={styles.loginContainer}>
        //
        //         <Text style={styles.loginTitle}>Login</Text>
        //
        //         <TextInput
        //             style={styles.input}
        //             onChangeText={text => {
        //                 setUsername(text);
        //             }}
        //             value={username}
        //             placeholder=" Riot Username"
        //             placeholderTextColor="gray"
        //         />
        //
        //         <TextInput
        //             secureTextEntry={true}
        //             style={styles.input}
        //             onChangeText={text => {
        //                 setPassword(text);
        //             }}
        //             value={password}
        //             placeholder=" Riot Password"
        //             placeholderTextColor="gray"
        //         />
        //
        //         <Dropdown style={styles.dropdownContainer}
        //             data={regions}
        //             value={value}
        //             labelField="label"
        //             valueField="value"
        //             placeholder="Select Region"
        //             onChange={item => {
        //                 setValue(item.value);
        //                 setRegion(item.value);
        //             }}
        //             renderLeftIcon={() => (
        //                 <Ionicons
        //                     name="earth-outline"
        //                     size={20}
        //                     color="gray" />
        //             )}
        //             selectedTextStyle={styles.dropDownText}
        //             placeholderStyle={styles.dropDownText}
        //             iconColor="tomato"
        //         ></Dropdown>
        //
        //         <View style={styles.buttonContainer}>
        //             <Button
        //                 onPress={onLoginPress}
        //                 title="Login"
        //                 color="white"
        //             />
        //         </View>
        //
        //     </View>
        // </View>
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
        //backgroundColor: "green"
    },
    loginTitle: {
        flex: 0.08,
        fontSize: 40,
        color: "white",
        alignSelf: "center",
        marginBottom: "8%",
    },
    input: {
        flex: 0.05,
        color: "gray",
        borderStyle: "solid",
        borderColor: "gray",
        borderBottomWidth: 1,
        marginBottom: "8%",
    },
    buttonContainer: {
        flex: 0.055,
        padding: 5,
        backgroundColor: "tomato",
        borderStyle: "solid",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
    },
    dropDownText: {
        color: "gray",
        marginLeft: "1%",
        fontSize: 15,
    },
});

export default Login;