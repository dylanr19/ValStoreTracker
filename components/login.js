import React, { useContext} from "react";
import { SafeAreaView} from "react-native";
import { WebView } from 'react-native-webview';
import 'react-native-url-polyfill/auto';
import {Auth} from "./auth";

const Login = () => {
    const { login } = useContext(Auth);

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
                source={{ uri: 'https://authenticate.riotgames.com/?client_id=play-valorant-web-prod&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dplay-valorant-web-prod%26nonce%3D1%26redirect_uri%3Dhttps%253A%252F%252Fplayvalorant.com%252Fopt_in%26response_type%3Dtoken%2520id_token%26scope%3Daccount%2520openid' }}
                //source={{ uri: 'https://auth.riotgames.com/login#client_id=play-valorant-web-prod&nonce=1&redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&response_type=token%20id_token'}}
            >
            </WebView>
        </SafeAreaView>
    );
}

export default Login;