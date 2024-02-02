import {StyleSheet, View, ScrollView, FlatList, Animated,} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Feather,} from "@expo/vector-icons";
import Weapon from "../Weapon/weapon";
import {useContext, useEffect, useState} from "react";
import { AuthContext } from "../Contexts/authContext";
import {getPlayerLoadout, getSkinByUuid} from "../../api/StoreService";
import Weapons from "../Weapon/weapons";
import {SettingsContext} from "../Contexts/settingsContext";
import {ThemeContext} from "../Contexts/themeContext";

const Search = () => {

    const { theme } = useContext(ThemeContext);
    const { authState } = useContext(AuthContext);
    const [ initialLoadout, setInitialLoadout] = useState([]);
    const [ currentLoadout, setCurrentLoadout ] = useState([]);
    const [ searchState, setSearchState] = useState('');

    // Store and display the user's search input in the search bar
    const updateSearch = (search) => {
        setSearchState(search);
    }

    // (partly) match the user's search input with the displayName of certain weapons in the loadout,
    // and then displays these weapons
    const handleSearch = () => {

        if (searchState === '')
        {
            setCurrentLoadout(initialLoadout);

        } else {
            const matchedSkins = [];

            initialLoadout.forEach((skin) => {
                if(skin.displayName.includes(searchState)){
                    matchedSkins.push(skin);
                }
            });

            setCurrentLoadout(matchedSkins);
        }
    }

    // initializes the FlatList with the user's loadout
    const initFlatList = async () => {

        const playerLoadout = await getPlayerLoadout(authState);

        const gunIDObjects = playerLoadout.Guns;
        const guns = [];

        for (const gunIds of gunIDObjects) {
            const skin = await getSkinByUuid(gunIds.SkinID);

            guns.push({
                displayName: skin.data.displayName,
                displayIcon: skin.data.chromas[0].fullRender,
                showVP: false
            });
        }

        setInitialLoadout(guns);
        setCurrentLoadout(guns);
    }

    // init the flatlist upon login
    useEffect(() => {

        if (authState.isSigned){
            initFlatList();
        }
        return () => {};

    }, [authState]);

    // invokes handlesearch to match user search input with certain weapon names
    // when search state changes / user typed in the search bar.
    useEffect(() => {

        handleSearch();
        return () => {};

    }, [searchState])

    return(
        <View style={[styles.container, {backgroundColor: theme.app.background}]}>

            <View style={styles.header}>

                <SearchBar containerStyle={[info.header, {backgroundColor: theme.app.background}]}
                           inputContainerStyle={[info.inputContainer, {backgroundColor: theme.search.background}]}
                           inputStyle={ { color: theme.app.text } }
                           placeholderTextColor={theme.app.text}
                           platform="ios" placeholder= "Search" onChangeText={updateSearch}
                           value={searchState}
                ></SearchBar>

            </View>

            <Weapons weapons={currentLoadout} color={theme.weapon.background} />

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
        height: "15%",
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "center",
    },
});

const info = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#121212",
    },
    inputContainer: {
        alignSelf: "center",
        backgroundColor: "#212121",
    },
    icon: {
        alignSelf: "flex-start",
        color: "white",
    },
    placeholder: {
        backgroundColor: "white",
    },
});

export default Search;