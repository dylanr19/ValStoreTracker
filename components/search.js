import {StyleSheet, View, ScrollView, FlatList,} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Feather,} from "@expo/vector-icons";
import Weapon from "./weapon";
import {useContext, useEffect, useState} from "react";
import { Auth } from "./auth";
import {getPlayerLoadout, getSkinByUuid} from "../api/StoreService";

const Search = () => {

    const [ initialLoadout, setInitialLoadout] = useState([]);
    const [ currentLoadout, setCurrentLoadout ] = useState([]);
    const [ searchState, setSearchState] = useState('');
    const { authState } = useContext(Auth);

    const updateSearch = (search) => {
        setSearchState(search);
    }

    const handleSearch = () => {

        if (searchState === '')
        {
            setCurrentLoadout(initialLoadout);
        }
        else
        {
            const matchedSkins = [];

            initialLoadout.forEach((skin) => {
                if(skin.displayName.includes(searchState)){
                    matchedSkins.push(skin);
                }
            });

            setCurrentLoadout(matchedSkins);
        }
    }

    const initScrollView = async () => {

        const playerLoadout = await getPlayerLoadout(
            authState.shard,
            authState.puuid,
            authState.entitlement,
            authState.token
        );

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

    useEffect(() => {

        if (authState.isSigned){
            initScrollView();
        }

        return () => {};
    }, [authState]);

    useEffect(() => {

        handleSearch();

        return () => {};
    }, [searchState])

    const renderItem = ({ item }) => (
        <Weapon
            key={item.displayName}
            name={item.displayName}
            price={""}
            color={"#212121"}
            image={{ uri: item.displayIcon }}
            showVP={false}
        >
        </Weapon>
    );

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

            {currentLoadout && (
             <FlatList
                 style={styles.weaponsContainer}
                 data={currentLoadout}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.displayName}
             ></FlatList>
            )}

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
        flex: 0.2,
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "center",
    },
    headerFilterIcon: {
        flex: 0.13,
        marginLeft: "2%",
        marginBottom: "6%",
    },
    weaponsContainer: {
        flex: 1,
        flexDirection: "column",
    },
    footer: {
        height: "8%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: "5%",
        paddingRight: "5%",
        bottom: 0,
        backgroundColor: "#363636",
    },
    footerIcon: {
        width: "10%",
        height: "40%",
        marginTop: "3%",
        flexWrap: "nowrap",
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