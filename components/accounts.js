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
import {getPlayerCard, getPlayerLoadout, getWallet} from "../api/StoreService";
import {Auth} from "./auth";
import {fetchPlayerInfo} from "../api/AuthService";

const Accounts = () => {

    const [ wallet, setWallet ] = useState({
        valorantPoints: '',
        radianite: '',
    });
    const [playerCard, setPlayerCard] = useState('');
    const [playerName, setPlayerName] = useState({ name: '', tag: '' });

    const { logout, authState } = useContext(Auth);

    const initWallet = async () => {

        const walletResponse = await getWallet(
            authState.shard,
            authState.puuid,
            authState.entitlement,
            authState.token
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
            authState.shard,
            authState.puuid,
            authState.entitlement,
            authState.token
        );

        if (playerLoadout !== null){
            playerCardID = playerLoadout.Identity.PlayerCardID;
            playerCard = await getPlayerCard(playerCardID);
            setPlayerCard(playerCard.data.smallArt);
        }
    }

    const initPlayerName = async () => {

        let displayName = '';
        let tagLine = '';

        console.log(
            'shard: ' + authState.shard +
            'entitlement: ' + authState.entitlement +
            'authToken: ' + authState.token
        );

        const playerInfo = await fetchPlayerInfo(authState.token);

        if(playerInfo !== null){
            displayName = playerInfo.acct.game_name;
            tagLine = playerInfo.acct.tag_line;

            setPlayerName({
                name: displayName,
                tag: tagLine
            });
        }
    }

    useEffect(() => {

        console.log('this runs');

        if (authState.isSigned){
            initWallet();
            initPlayerCard();
            initPlayerName();
        }

        return () => {};
    }, [authState])

    const swipeButton = [
        <TouchableHighlight style={{ height: 70 }} onPress={logout}>

            <Text
                style={{
                    color: "gray",
                    fontWeight: "bold",
                    marginTop: 25,
                    marginLeft: "2.5%",
                }}>Logout</Text>

        </TouchableHighlight>
    ];

    return(
        <View style={styles.page}>
            <View style={styles.container}>

                <View style={header.container}>
                    <Text style={header.title}>Account</Text>
                </View>

                <View style={styles.thinLine}></View>

                <View style={accounts.container}>
                    <View>

                        <Swipeable
                            contentContainerStyle={[accounts.accountContainer, {backgroundColor: "#363636"}]}
                            rightButtons={swipeButton}>

                            <View style={[accounts.imageContainer, {}]}>
                                <ImageBackground
                                    style={[accounts.image, {}]}
                                    source={{
                                        uri: playerCard
                                    }}>
                                </ImageBackground>
                            </View>

                            <View style={accounts.textContainer}>
                                <Text style={[accounts.text, {color: "tomato"}]}>{playerName.name}</Text>
                                <Text style={[accounts.tag, {color: "gray"}]}>#{playerName.tag}</Text>
                            </View>

                            <Ionicons
                                name="ios-arrow-forward"
                                size={22} color="gray"
                                style={{ display: "undefined" }}
                            />

                        </Swipeable>

                    </View>

                    <View style={points.container}>

                        <ImageBackground
                            source={{ uri: 'https://media.valorant-api.com/currencies/85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741/displayicon.png' }}
                            style={{ flex: 1 }}
                            imageStyle={points.image}
                            resizeMode={"cover"}
                        >
                            <Text style={points.text}>{wallet.valorantPoints} VP</Text>
                        </ImageBackground>

                        <ImageBackground
                            source={{ uri: 'https://media.valorant-api.com/currencies/e59aa87c-4cbf-517a-5983-6e81511be9b7/displayicon.png' }}
                            style={{ flex: 1 }}
                            imageStyle={points.image}
                            resizeMode={"cover"}
                        >
                            <Text style={points.text}>{wallet.radianite} R</Text>
                        </ImageBackground>

                    </View>
                </View>

                <View style={styles.thinLine}></View>

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

const points = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 100,
        marginBottom: 20,
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
        maxHeight: '80%'
    }
});

export default Accounts;