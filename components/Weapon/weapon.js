import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useContext, useState} from "react";
import SkinInfo from "./skin-info-modal";
import {ThemeContext} from "../Contexts/themeContext";

const VPEmblem = "https://media.valorant-api.com/currencies/85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741/displayicon.png";

const Weapon = ({ image, price, name, color, showVP = true }) => {

    const { theme } = useContext(ThemeContext);
    const [isModalVisible, setModalVisible] = useState(false);

    const onModalOpen = () => {
        setModalVisible(true);
    }

    const onModalClose = () => {
        setModalVisible(false);
    }

    const containerStyle = {
        ...styles.container,
        backgroundColor: color,
    }

    return(
        <Pressable style={containerStyle} onPress={onModalOpen}>

            <Image style={styles.image} source={image}/>

            <View style={info.container }>
                { showVP === true ? <Image style={[info.image, { backgroundColor: theme.currency.icon }]} source={{ uri: VPEmblem }}/> : null }
                <Text style={[info.text, { color: theme.app.text }]}>{price}<Text> {name}</Text></Text>
            </View>

            <SkinInfo onModalClose={onModalClose} isModalVisible={isModalVisible} skinName={name} ></SkinInfo>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        marginTop: "5%",
        borderRadius: 15,
    },
    image: {
        resizeMode:'contain',
         width: "100%",
        aspectRatio: 2,
    },
});

const info = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "20%",
        left: "5%",
        bottom: "2%",
    },
    image: {
        resizeMode:'contain',
        width: '4.5%',
        backgroundColor: 'tomato',
        borderRadius: 10,
    },
    text: {
        left: "25%",
        fontFamily: "Oswald_400Regular",
        fontStyle: "normal",
        fontSize: 11,
        color: "white",
    },
});

export default Weapon;