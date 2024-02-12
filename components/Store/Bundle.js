import {Animated} from "react-native";
import {StyleSheet, Text, View,} from 'react-native';
import StoreHeader from "./storeHeader";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Contexts/authContext";
import {getBundleDurationInSeconds, getBundleImage, getBundleSkins, getBundleTitle, getStorePrice} from "../../api/StoreService";
import Timer from "./timer";
import Weapons from "../Weapon/weapons";
import {SettingsContext} from "../Contexts/settingsContext";
import {ThemeContext} from "../Contexts/themeContext";

const Bundle = ({ isForeground }) => {

    const { theme } = useContext(ThemeContext);
    const { authState } = useContext(AuthContext);
    const [scrollY] = useState(new Animated.Value(0));
    const [ weapons, setWeapons ] = useState([]);
    const [ banner, setBanner ] = useState('');
    const [ title, setTitle ] = useState('');
    const [duration, setDuration] = useState(0); // the remaining time in seconds until the bundle expires

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 300], // Adjust the range as needed
        outputRange: ["30%", "0%"], // Initial and final height of the header
        extrapolate: 'clamp',
    });

    // gets the amount of seconds left until the bundle expires. this is needed for the timer component.
    const fetchDuration = async () => {
        if(authState.isSigned && isForeground){
            const durationInSeconds = await getBundleDurationInSeconds(
                authState
            );

            setDuration(durationInSeconds);
        }
    }

    const fetchBundle = async () => {
        if (authState.isSigned === true){

            const fetchedSkins = await getBundleSkins(authState);
            const weaponsArray = [];

            for (const skin of fetchedSkins) {


                    const price = await getStorePrice(authState, skin.levels[0].uuid,);

                    weaponsArray.push({
                        displayName: skin.displayName,
                        displayIcon: { uri: skin.displayIcon },
                        price: price,
                        color: theme.weapon.background,
                        showImage: true,
                        key: skin.uuid,
                    });

            }



            setBanner(await getBundleImage(authState));
            setTitle(await getBundleTitle(authState));
            setWeapons(weaponsArray);
        }
    }

    // init the bundle upon login
    useEffect(() => {

        fetchBundle();
        return () => {};

    }, [authState]);

    // init the timer upon login/when the app is foregrounded and the user is logged in
    useEffect(() => {

        if(authState.isSigned){
            fetchDuration();
        }

        return () => {};
    }, [authState, isForeground]);

    const textComponent = () => {
        return(
            <View style={[styles.headerTextContainer]}>
                <Text style={[styles.headerFeaturedText, { color: theme.app.title }]}>FEATURED | <Timer timerState={duration} setTimerState={setDuration}></Timer></Text>
                <Text style={[styles.headerText, { color: theme.app.title }]}>{title.toUpperCase()}{"\n"}COLLECTION</Text>
            </View>
        );
    }

    return(
        <View style={[styles.container, {backgroundColor: theme.app.background}]}>
            <StoreHeader textComponent={textComponent()} headerHeight={headerHeight} banner={{ uri: banner }} imageStyle={styles.headerImg} />
            <Weapons weapons={weapons} scrollY={scrollY} />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        minHeight: "100%",
    },
    container: {
        flex: 1,
        backgroundColor: '#121212',
        flexWrap: "nowrap",
        flexDirection: "column",
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
});

export default Bundle;