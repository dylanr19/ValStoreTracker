import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import {StyleSheet, Text, View, ScrollView, ImageBackground, Animated} from 'react-native';
import Weapon from "./weapon";
import {useState} from "react";

const Daily = () => {
    const [scrollY] = useState(new Animated.Value(0));

    const headerHeight = scrollY.interpolate({
       inputRange: [0, 200],
       outputRange: ["30%", "0%"],
       extrapolate: 'clamp'
    });

    return(
        <View style={styles.container}>

            <Animated.View style={{ height: headerHeight }}>
                <MaskedView maskElement={
                    <LinearGradient style={styles.headerImg} colors={['#FFFFFF', '#FFFFFF00']} start={{x: 0, y: 0.82}} end={{x: 0, y: 0.95}} ></LinearGradient>
                }>
                    <ImageBackground style={styles.headerImg} source={
                        require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\valo-menu-background.jpeg")
                    }>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerText}>DAILY STORE</Text>
                            <Text style={styles.headerTimeText}>00:00:00:00</Text>
                        </View>
                    </ImageBackground>
                </MaskedView>
            </Animated.View>

            <ScrollView
                style={styles.weaponsContainer}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } },
                ])}
            >

                <Weapon
                    name={"Reaver Vandal"}
                    price={"1775"}
                    color={"#0A1B26"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\vandal-reaver.png")}>
                </Weapon>

                <Weapon
                    name={"Prism Operator"}
                    price={"1775"}
                    color={"#0A1B26"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\operator-prism.png")}>
                </Weapon>

                <Weapon
                    name={"Elderflame Dagger"}
                    price={"1775"}
                    color={"#0A1B26"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\dagger-elderflame.png")}>
                </Weapon>

                <Weapon
                    name={"Valorant GO! Classic"}
                    price={"1775"}
                    color={"#0A1B26"}
                    image={require("C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\classic-go.png")}>
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
    weaponsContainer: {
        flex: 1,
        marginBottom: "15%",
        flexDirection: "column",
    },
});

export default Daily;