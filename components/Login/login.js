import React, {useContext, useEffect, useState, useRef} from "react";
import {SafeAreaView, View} from "react-native";
import { WebView } from 'react-native-webview';
import 'react-native-url-polyfill/auto';
import {AuthContext} from "../Contexts/authContext";
import RegionPicker from "./regionPicker";
import IonButton from "./ionButton";

const Login = () => {
    const { login } = useContext(AuthContext);
    const webViewRef = useRef(null);
    const [showWebview, setShowWebview] = useState(false);
    const [region, setRegion] = useState('');

    function getToken(url, tokenName) {
        const params = new URLSearchParams(url.split("#")[1]);
        return params.get(tokenName);
    }

    // After a successful login the url will hold the tokens needed for making calls to Riot end points.
    // Extract the tokens from the url and save them within the app.
    const handleNavigationStateChange = (navState) => {
        if(navState.url !== null) {
            const accessToken = getToken(navState.url, "access_token");
            const idToken = getToken(navState.url, "id_token");
            login(accessToken, idToken, region);
        }
    };

    const handleForwardNavigation = () => {
        webViewRef.current.goForward();
    }

    const handleBackNavigation = () => {
        webViewRef.current.goBack();
    }

    const handleRefresh = () => {
        webViewRef.current.reload();
    }

    const handleClose = () => {
        setRegion('');
    }

    // this will open the webview when the user selects a region or,
    // it will close the webview and return to region picker screen when the user hits the close button
    useEffect(() => {

      if(region !== '') {
          setShowWebview(true);
      } else {
          setShowWebview(false);
      }

    }, [region])

    return(
        <>
            {showWebview === false &&
                <RegionPicker setRegion={setRegion}></RegionPicker>}

            {showWebview &&
                <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.82)' }}>
                    <WebView
                        ref={webViewRef}
                        incognito={true}
                        userAgent={'Chrome'}
                        setSupportMultipleWindows={false}
                        allowsBackForwardNavigationGestures={true}
                        onNavigationStateChange={handleNavigationStateChange}
                        javaScriptEnabled={true}
                        //source={{ uri: 'https://authenticate.riotgames.com/?client_id=play-valorant-web-prod&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dplay-valorant-web-prod%26nonce%3D1%26redirect_uri%3Dhttps%253A%252F%252Fplayvalorant.com%252Fopt_in%26response_type%3Dtoken%2520id_token%26scope%3Daccount%2520openid' }}
                        source={{ uri: 'https://auth.riotgames.com/login#client_id=play-valorant-web-prod&nonce=1&redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&response_type=token%20id_token'}}
                    >
                    </WebView>
                    <View style={{ height: '5%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <IonButton name={"chevron-back-sharp"} size={24} color={"gray"} onPress={handleBackNavigation}></IonButton>
                        <IonButton name={"chevron-forward-sharp"} size={24} color={"gray"} onPress={handleForwardNavigation}></IonButton>
                        <IonButton name={"refresh-sharp"} size={22} color={"gray"} onPress={handleRefresh}></IonButton>
                        <IonButton name={"close-outline"} size={28} color={"gray"} onPress={handleClose}></IonButton>
                    </View>
                </SafeAreaView>
            }
        </>
    );
}

export default Login;