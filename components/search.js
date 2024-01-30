import {StyleSheet, View, ScrollView, FlatList, Animated,} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Feather,} from "@expo/vector-icons";
import Weapon from "./weapon";
import {useContext, useEffect, useState} from "react";
import { Auth } from "./auth";
import {getPlayerLoadout, getSkinByUuid} from "../api/StoreService";
import Weapons from "./weapons";

const Search = () => {

    const [ initialLoadout, setInitialLoadout] = useState([]);
    const [ currentLoadout, setCurrentLoadout ] = useState([]);
    const [ searchState, setSearchState] = useState('');
    const { authState } = useContext(Auth);

    // Store and display the user's search input in the search bar
    const updateSearch = (search) => {
        setSearchState(search);
    }

    // (partly) match the user's search input with the displayName of certain weapons in the loadout
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
                displayIcon: skin.data.chromas[0].fullRender
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
        <View style={styles.container}>

            <View style={styles.header}>

                <SearchBar containerStyle={info.header}
                           inputContainerStyle={info.inputContainer}
                           inputStyle={ { color: 'white' } }
                           placeholderTextColor="white" searchIcon={info.inputContainer}
                           platform="ios" placeholder= "Search" onChangeText={updateSearch}
                           value={searchState}
                ></SearchBar>

            </View>

            <Weapons weapons={currentLoadout} />

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