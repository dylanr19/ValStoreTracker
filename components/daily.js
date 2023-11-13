import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {Entypo, FontAwesome, Ionicons, Octicons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Daily = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <MaskedView maskElement={
                    <LinearGradient style={styles.headerImg} colors={['#FFFFFF', '#FFFFFF00']} start={{x: 0, y: 0.82}} end={{x: 0, y: 0.95}} ></LinearGradient>
                }>
                    <ImageBackground style={styles.headerImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\valo-menu-background.jpeg")
                    }>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerBundleText}>DAILY STORE</Text>
                            <Text style={styles.headerTimeText}>00:00:00:00</Text>
                        </View>
                    </ImageBackground>
                </MaskedView>
            </View>
            <ScrollView style={styles.weapons}>

                <View style={styles.weaponContainer}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\vandal-reaver.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Reaver Vandal</Text></Text>
                    </View>
                </View>

                <View style={styles.weaponContainer}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\operator-prism.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Prism Operator</Text></Text>
                    </View>
                </View>

                <View style={styles.weaponContainer}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\dagger-elderflame.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Elderflame Dagger</Text></Text>
                    </View>
                </View>

                <View style={styles.weaponContainer}>
                    <Image style={styles.weaponImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\screenshots\\classic-go.png")}>
                    </Image>
                    <View style={styles.weaponInfo}>
                        <Image style={styles.weaponVPImg} source={
                            require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png")
                        }></Image>
                        <Text style={styles.weaponInfoText}>1775 <Text>Classic VALORANT GO!</Text></Text>
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
        backgroundColor: "#070B0E",
        flexWrap: "nowrap",
        flexDirection: "column",
    },
    header: {
        flex: 0.5,
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
    headerBundleText: {
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 20,
        color: "white",

    },
    headerImg: {
        width: "100%",
        height: "100%",
    },
    weapons: {
        flex: 1,
        flexDirection: "column",
    },
    weaponContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: "5%",
        backgroundColor: "#0A1B26",
        borderStyle: "solid",
        borderColor: "red",
        borderRadius: 15,
    },
    weaponImg: {
        resizeMode:'contain',
        alignSelf: "center",
        width: "80%",
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

export default Daily;