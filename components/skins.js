import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {AntDesign, Feather, FontAwesome5} from "@expo/vector-icons";

const Skins = () => {

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <SearchBar containerStyle={styles.headerSearchbar}
                           inputContainerStyle={styles.SearchbarInputContainer}
                           placeholderTextColor="white" searchIcon={styles.SearchbarIcon}
                           platform="ios" placeholder= "Search"
                ></SearchBar>
                <Feather  name="filter" size={24} color="white" style={styles.headerFilterIcon} />
            </View>

            <ScrollView style={styles.weapons}>
                <View style={styles.weapon}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\vandal.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Vandal</Text></Text>
                    </View>
                </View>

                <View style={styles.weapon}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\ghost-lux.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Ghost</Text></Text>
                    </View>
                </View>

                <View style={styles.weapon}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\melee.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Staff</Text></Text>
                    </View>
                </View>
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
    headerSearchbar: {
        flex: 0.9,
        marginLeft: "3%",
        backgroundColor: "#121212",
    },
    SearchbarInputContainer: {
        alignSelf: "center",
        backgroundColor: "#212121",
    },
    SearchbarIcon: {
        alignSelf: "flex-start",
        color: "white",
    },
    SearchbarPlaceholder: {
        backgroundColor: "white",
    },
    weapons: {
        flex: 1,
        flexDirection: "column",
    },
    weapon: {
        width: "90%",
        alignSelf: "center",
        marginTop: "5%",
        backgroundColor: "#212121",
        borderStyle: "solid",
        borderColor: "red",
        borderRadius: 15,
    },
    weaponImg: {
        resizeMode:'contain',
        width: "100%",
    },
    weaponInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "20%",
        left: "5%",
        bottom: "2%",
        // backgroundColor: "red",
    },
    weaponVPImg: {
        width: "5%",
        height: "100%",
    },
    weaponInfoText: {
        left: "25%",
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 11,
        color: "white",
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

export default Skins;