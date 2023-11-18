import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import Weapon from "./weapon";

const Bundle = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <MaskedView maskElement={
                    <LinearGradient style={styles.headerImg} colors={['#FFFFFF', '#FFFFFF00']} start={{x: 0, y: 0.82}} end={{x: 0, y: 0.95}} ></LinearGradient>
                }>
                    <ImageBackground style={styles.headerImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\promo-image.png")
                    }>
                        <View style={styles.headerTextContainer}>
                            <Image style={styles.headerVPImage} source={
                                require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                            }></Image>
                            <Text style={styles.headerVPValue}>7700</Text>
                            <Text style={styles.headerFeaturedText}>FEATURED | <Text style={{color: "#71FF5A"}}>00:00:00:00</Text></Text>
                            <Text style={styles.headerText}>VALIANT HERO{"\n"}COLLECTION</Text>
                        </View>
                    </ImageBackground>
                </MaskedView>
            </View>

                <ScrollView style={styles.weaponsContainer}>

                    <Weapon
                        name={"Vandal"}
                        price={"1775"}
                        color={"#212121"}
                        image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\vandal.png")}>
                    </Weapon>

                    <Weapon
                        name={"Operator"}
                        price={"1775"}
                        color={"#212121"}
                        image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\awp.png")}>
                    </Weapon>

                    <Weapon
                        name={"Ares"}
                        price={"1775"}
                        color={"#212121"}
                        image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\ares.png")}>
                    </Weapon>

                    <Weapon
                        name={"Ghost"}
                        price={"1775"}
                        color={"#212121"}
                        image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\ghost.png")}>
                    </Weapon>

                    <Weapon
                        name={"Knife"}
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
        flex: 0.5,
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
    headerVPImage: {
        height: "8%",
        width: "5%",
        alignSelf: "flex-end",
        top: "36.5%",
        right: "10%",
    },
    headerVPValue: {
        alignSelf: "flex-end",
        top: "28%",
        right: "1.5%",
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 15,
        color: "white",
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