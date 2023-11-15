import { StyleSheet, View, ScrollView, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Feather,} from "@expo/vector-icons";
import Weapon from "./weapon";

const Search = () => {

    return(
        <View style={styles.container}>

            <View style={styles.header}>

                <SearchBar containerStyle={info.header}
                           inputContainerStyle={info.inputContainer}
                           placeholderTextColor="white" searchIcon={info.inputContainer}
                           platform="ios" placeholder= "Search"
                ></SearchBar>

                <Feather
                    name="filter"
                    size={24}
                    color="white"
                    style={styles.headerFilterIcon}
                />

            </View>

            <ScrollView style={styles.weaponsContainer}>

                <Weapon
                    name={"Monkey Vandal"}
                    price={"1775"}
                    color={"#212121"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\vandal.png")}>
                </Weapon>

                <Weapon
                    name={"Lux Ghost"}
                    price={"1775"}
                    color={"#212121"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\ghost-lux.png")}>
                </Weapon>

                <Weapon
                    name={"Monkey Knife"}
                    price={"1775"}
                    color={"#212121"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\melee.png")}>
                </Weapon>

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
        flex: 0.9,
        marginLeft: "3%",
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