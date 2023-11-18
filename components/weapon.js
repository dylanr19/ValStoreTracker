import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import SkinInfo from "./skin-info-modal";

const VPEmblem = "C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\icons\\VPEmblem.png";

const Weapon = ({ image, price, name, color }) => {
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
                <Image style={info.image} source={require(VPEmblem)}/>
                <Text style={info.text}>{price}<Text> {name}</Text></Text>
            </View>

            <SkinInfo onModalClose={onModalClose} isModalVisible={isModalVisible}></SkinInfo>
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
        width: "5%",
        height: "100%",
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