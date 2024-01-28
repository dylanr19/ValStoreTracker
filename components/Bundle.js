import {Animated} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
} from 'react-native';

import Weapon from "./weapon";
import {useContext, useEffect, useState} from "react";
import {Auth} from "./auth";

import {
    getBundleDurationInSeconds,
    getBundleImage,
    getBundleSkins,
    getBundleTitle,
    getStorePrice
} from "../api/StoreService";

const Bundle = () => {
    const { authState } = useContext(Auth);
    const [scrollY] = useState(new Animated.Value(0));
    const [ weaponComponents, setWeaponComponents ] = useState([]);
    const [ banner, setBanner ] = useState('');
    const [ title, setTitle ] = useState('');

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 200], // Adjust the range as needed
        outputRange: ["30%", "0%"], // Initial and final height of the header
        extrapolate: 'clamp',
    });

    const [durationRemainingInSeconds, setDurationRemainingInSeconds] = useState(0);
    const [durationRemainingInTime, setDurationRemainingInTime] = useState('00:00:00:00');
    const updateTimer = () => {

        setDurationRemainingInSeconds(durationRemainingInSeconds - 1);
    }

    useEffect(() => {

        convertDurationInSecondsToTime();

    }, [durationRemainingInSeconds])

    const convertDurationInSecondsToTime = () => {

        const days = Math.floor(durationRemainingInSeconds / (60 * 60 * 24));
        const hours = Math.floor((durationRemainingInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((durationRemainingInSeconds % (60 * 60)) / 60);
        const seconds = durationRemainingInSeconds % 60;

        const formattedTime = `${days}:${hours}:${minutes}:${seconds}`;

        setDurationRemainingInTime(formattedTime);
    }

    useEffect(() => {

        const fetchDuration = async () => {
            const durationInSeconds = await getBundleDurationInSeconds(
                authState.shard,
                authState.puuid,
                authState.entitlement,
                authState.token
            );

            setDurationRemainingInSeconds(durationInSeconds);
        }

        fetchDuration();

        return () => {};
    }, [authState]);

    useEffect(() => {
        const interval = setInterval(() => {
                updateTimer();
        }, 1000);

        return () => clearInterval(interval);
    }, [durationRemainingInSeconds]);

    useEffect(() => {
        const fetchData = async () => {
            if (authState.isSigned === true){
                const fetchedSkins = await getBundleSkins(
                    authState.shard,
                    authState.puuid,
                    authState.entitlement,
                    authState.token
                );

                const weaponComponents = [];

                for (const skin of fetchedSkins) {
                    const price = await getStorePrice(
                        authState.shard,
                        authState.puuid,
                        authState.entitlement,
                        authState.token,
                        skin.levels[0].uuid,
                    );

                    weaponComponents.push(
                        <Weapon
                            name={skin.displayName}
                            price={price}
                            color={"#212121"}
                            image={{ uri: skin.displayIcon }}>
                        </Weapon>
                    );
                }

                setBanner(await getBundleImage(
                    authState.shard,
                    authState.puuid,
                    authState.entitlement,
                    authState.token
                ));

                setTitle(await getBundleTitle(
                    authState.shard,
                    authState.puuid,
                    authState.entitlement,
                    authState.token
                ));

                setWeaponComponents(weaponComponents);
            }
        }

        fetchData();

        return () => {};
    }, [authState]);

    return(
        <View style={styles.container}>

            <Animated.View style={{ height: headerHeight }}>
                <MaskedView maskElement={
                    <LinearGradient style={styles.headerImg} colors={['#FFFFFF', '#FFFFFF00']} start={{x: 0, y: 0.82}} end={{x: 0, y: 0.95}} ></LinearGradient>
                }>
                    <ImageBackground style={styles.headerImg} source={
                        { uri: banner}
                    }>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerFeaturedText}>FEATURED | <Text style={{color: "#71FF5A"}}>{durationRemainingInTime}</Text></Text>
                            <Text style={styles.headerText}>{title.toUpperCase()}{"\n"}COLLECTION</Text>
                        </View>

                    </ImageBackground>

                </MaskedView>
            </Animated.View>

                <ScrollView
                    style={styles.weaponsContainer}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { y: scrollY } } },
                    ],{ useNativeDriver: false })}
                >

                    {weaponComponents.map(weapon => (
                        <View key={weapon.uuid}>{weapon}</View>
                    ))}

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
        backgroundColor: "#121212",
        flexWrap: "nowrap",
        flexDirection: "column",
    },
    header: {
        // flex: 0.5,
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingLeft: "2%",
        bottom: "10%",
    },
    headerFeaturedText: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 15,
        color: "white",
        alignSelf: "flex-start",
    },
    headerText: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 17,
        color: "white",
        alignSelf: "flex-start",
    },
    headerImg: {
        width: "100%",
        height: "100%",
    },
    weaponsContainer: {
        flex: 1,
        marginBottom: "15%",
        flexDirection: "column",
    },
});

export default Bundle;