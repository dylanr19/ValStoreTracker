import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {AntDesign, Feather, FontAwesome5} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import Weapon from "./weapon";

const WishList = () => {

    return(
        <View style={styles.container}>

            <LinearGradient style={styles.header} start={{ x: 0, y: 0.5 }} end={ { x: 0, y: 1 } } colors={["#B7245C", "transparent"]}>
                <Text style={styles.headerText}>WISH LIST</Text>
            </LinearGradient>

            <ScrollView style={styles.weaponsContainer}>

                <Weapon
                    name={"Monkey Ghost"}
                    price={"1775"}
                    color={"#212121"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\ghost.png")}>
                </Weapon>

                <Weapon
                    name={"Elderflame Dagger"}
                    price={"1775"}
                    color={"#212121"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\dagger-elderflame.png")}>
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
        flex: 0.4,
        width: "100%",
        justifyContent: "center",
    },
    headerText: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 25,
        color: "white",
        alignSelf: "center",
        marginBottom: "18%",
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

export default WishList;