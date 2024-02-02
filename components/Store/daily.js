import {StyleSheet, Text, View, Animated} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {getSingleSkinsDurationInSeconds, getFeaturedSkinOffers, getStorePrice} from "../../api/StoreService";
import {AuthContext} from "../Contexts/authContext";
import Timer from "./timer";
import Weapons from "../Weapon/weapons";
import StoreHeader from "./storeHeader";
import {SettingsContext} from "../Contexts/settingsContext";
import {ThemeContext} from "../Contexts/themeContext";

const Daily = ({ isForeground }) => {

    const { theme } = useContext(ThemeContext);
    const { authState } = useContext(AuthContext);
    const [scrollY] = useState(new Animated.Value(0));
    const [ weaponComponents, setWeaponComponents ] = useState([]);
    const [duration, setDuration] = useState(0); // the remaining time in seconds until the storefront expires
    const banner = require('C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\valo-menu-background.jpeg');

    const headerHeight = scrollY.interpolate({
       inputRange: [0, 100],
       outputRange: ["30%", "3%"],
       extrapolate: 'clamp'
    });

    const fetchDuration = async () => {

        if(!authState.isSigned && !isForeground){
            return;
        }

        const durationInSeconds = await getSingleSkinsDurationInSeconds(
            authState
        );

        setDuration(durationInSeconds);
    }

    const fetchStoreData = async () => {
        if (authState.isSigned === true){

            const fetchedSkins = await getFeaturedSkinOffers(authState);
            const weaponComponents = [];

            for (const skin of fetchedSkins) {
                const price = await getStorePrice(authState, skin.levels[0].uuid,);

                weaponComponents.push({
                    displayName: skin.displayName,
                    displayIcon: skin.displayIcon,
                    price: price,
                    color: "#212121",
                    key: skin.uuid,
                    showVP: true
                });
            }

            setWeaponComponents(weaponComponents);
        }
    }

    useEffect(() => {
        if(authState.isSigned){
            fetchDuration();
        }
        return () => {};
    }, [authState, isForeground]);

    useEffect(() => {
        fetchStoreData();
        return () => {};
    }, [authState]);

    const textComponent = () => {
        return(
            <View style={styles.headerTextContainer}>
                <Text style={[styles.headerText, { color: theme.app.title }]}>DAILY STORE</Text>
                <Text style={styles.headerTimeText}><Timer timerState={duration} setTimerState={setDuration}></Timer></Text>
            </View>
        );
    }

    return(
        <View style={[styles.container, {backgroundColor: theme.app.background}]}>
            <StoreHeader headerHeight={headerHeight} textComponent={textComponent()} imageStyle={styles.headerImg} banner={banner}/>
            <Weapons weapons={weaponComponents} scrollY={scrollY} color={theme.weapon.background} />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        minHeight: "100%",
    },
    container: {
        flex: 1,
        backgroundColor: "#070B0E",
        flexWrap: "nowrap",
        flexDirection: "column",
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTimeText: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 18,
        color: "#71FF5A",
        marginTop: "1.5%",

    },
    headerText: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 20,
        color: "white",
    },
    headerImg: {
        width: "100%",
        height: "100%",
    },
});

export default Daily;