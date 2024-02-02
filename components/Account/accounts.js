import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableHighlight,
} from "react-native";

import React, {useEffect, useState, useContext} from "react";
import {Ionicons} from "@expo/vector-icons";
import Swipeable from 'react-native-swipeable';
import {getPlayerCard, getPlayerLoadout, getWallet} from "../../api/StoreService";
import {AuthContext} from "../Contexts/authContext";
import {fetchPlayerInfo} from "../../api/AuthService";
import {fetchNameService} from "../../api/NameService";
import {SettingsContext} from "../Contexts/settingsContext";
import {ThemeContext} from "../Contexts/themeContext";

const Accounts = () => {

    const { theme } = useContext(ThemeContext);
    const [playerCard, setPlayerCard] = useState('');
    const [playerName, setPlayerName] = useState({ name: '', tag: '' });
    const { logout, authState } = useContext(AuthContext);

    const [ wallet, setWallet ] = useState({
        valorantPoints: '',
        radianite: '',
    });

    const initWallet = async () => {

        const walletResponse = await getWallet(
            authState
        );

        const balances = walletResponse.Balances;
        const valorantPoints = balances[Object.keys(balances)[0]];
        const radianite = balances[Object.keys(balances)[2]];

        setWallet(
            {
                radianite: radianite,
                valorantPoints: valorantPoints
            }
        );

    }

    const initPlayerCard = async () => {

        let playerCardID = '';
        let playerCard = '';

        const playerLoadout = await getPlayerLoadout(
            authState
        );

        if (playerLoadout !== null){
            playerCardID = playerLoadout.Identity.PlayerCardID;
            playerCard = await getPlayerCard(playerCardID);
            setPlayerCard(playerCard.data.smallArt);
        }
    }

    const initPlayerName = async () => {

        const playerInfo = await fetchNameService(authState);

        const displayName = playerInfo[0].GameName;
        const tagLine = playerInfo[0].TagLine;

        setPlayerName({
            name: displayName,
            tag: tagLine
        });

    }

    useEffect(() => {

        if (authState.isSigned){
            initWallet();
            initPlayerCard();
            initPlayerName();
        }

        return () => {};
    }, [authState])

    const logoutButton = [
        <TouchableHighlight style={{ height: 70 }} onPress={logout}>

            <Text
                style={{
                    color: theme.account.logout,
                    fontWeight: "bold",
                    marginTop: 25,
                    marginLeft: "2.5%",
                }}>Logout</Text>

        </TouchableHighlight>
    ];

    return(
        <View style={[styles.page, { backgroundColor: theme.app.background}]}>
            <View style={[styles.container, {backgroundColor: theme.app.background}]}>

                <View style={header.container}>
                    <Text style={[header.title, {color: theme.app.text}]}>Account</Text>
                </View>

                <View style={[styles.thinLine, {backgroundColor: theme.account.thinLine}]}></View>

                <View style={accounts.container}>
                    <View>

                        <Swipeable
                            contentContainerStyle={[accounts.accountContainer, {backgroundColor: theme.account.swiper}]}
                            rightButtons={logoutButton}
                        >

                            <View style={[accounts.imageContainer, {}]}>
                                <ImageBackground
                                    style={[accounts.image, {}]}
                                    source={{
                                        uri: playerCard
                                    }}>
                                </ImageBackground>
                            </View>

                            <View style={accounts.textContainer}>
                                <Text style={[accounts.text, {color: theme.account.name}]}>{playerName.name}</Text>
                                <Text style={[accounts.tag, {color: theme.account.tag}]}>#{playerName.tag}</Text>
                            </View>

                            <Ionicons
                                name="ios-arrow-forward"
                                size={22} color={theme.account.arrow}
                                style={{ display: "undefined" }}
                            />

                        </Swipeable>

                    </View>

                    <View style={points.container}>

                        <ImageBackground
                            source={{ uri: 'https://media.valorant-api.com/currencies/85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741/displayicon.png' }}
                            style={{ flex: 1 }}
                            imageStyle={[points.image, { backgroundColor: theme.currency.icon }]}
                            resizeMode={"cover"}
                        >
                            <Text style={[points.text, {color: theme.app.text}]}>{wallet.valorantPoints} VP</Text>
                        </ImageBackground>

                        <ImageBackground
                            source={{ uri: 'https://media.valorant-api.com/currencies/e59aa87c-4cbf-517a-5983-6e81511be9b7/displayicon.png' }}
                            style={{ flex: 1 }}
                            imageStyle={[points.image, { backgroundColor: theme.currency.icon }]}
                            resizeMode={"cover"}
                        >
                            <Text style={[points.text, {color: theme.app.text}]}>{wallet.radianite} R</Text>
                        </ImageBackground>

                    </View>
                </View>

                <View style={[styles.thinLine, {backgroundColor: theme.account.thinLine}]}></View>

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
        marginTop: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
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
        backgroundColor: "gray"
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

const points = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        maxHeight: 100,
        marginBottom: 20,
        // backgroundColor: 'red'
    },
    text: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        alignSelf: 'center',
        marginTop: '40%',
        color: 'white',
    },
    image: {
        resizeMode:'contain',
        flex: 1,
        maxHeight: '80%',
        maxWidth: '60%',
        borderRadius: 60,
        marginLeft: '32%',
        backgroundColor: 'tomato',
    }
});

export default Accounts;