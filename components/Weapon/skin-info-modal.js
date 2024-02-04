import {Modal, Pressable, View, StyleSheet, Image, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {ResizeMode, Video} from "expo-av";
import {useContext, useEffect, useState} from "react";
import { fetchSkinByName } from '../../api/StoreService';
import Swiper from "react-native-swiper";
import {SettingsContext} from "../Contexts/settingsContext";
import {ThemeContext} from "../Contexts/themeContext";
import SwiperWindow from "./swiperWindow";

const SkinInfo = ({ isModalVisible, onModalClose, skinName }) => {

    const { theme } = useContext(ThemeContext);
    const [chromaVideos, setChromaVideos] = useState([]);
    const [levelVideos, setLevelVideos] = useState([]);
    const [images, setImages] = useState([]);

    const initSkinInfo = async () => {

        const skin = await fetchSkinByName(skinName);

        const images = [];
        const chromaVideos = [];
        const levelVideos = [];

        skin.chromas.forEach(c => {
            images.push(
                <Image
                    key={skinName}
                    source={{ uri: c.fullRender }}
                    style={ {  resizeMode:'contain', width: "100%", aspectRatio: 2, } }
                />
            );
        });

        skin.chromas.forEach(c => {

            if(c.streamedVideo === null){
                return;
            }

            chromaVideos.push(
                <View key={skinName} style={styles.video}>
                    <Text style={{ flex: 0.1, marginTop: '5%', color: theme.app.text, textAlign: 'center' }}>Color Preview</Text>
                    <Video shouldPlay={false}
                           style={styles.video}
                           source={{
                               uri: c.streamedVideo,
                           }}
                           useNativeControls
                           resizeMode={ResizeMode.STRETCH}
                           isLooping
                    />
                </View>
            );
        });

        skin.levels.forEach(l => {

            if(l.streamedVideo === null){
                return;
            }

            levelVideos.push(
                <View key={skinName} style={styles.video}>
                    <Text style={{ flex: 0.1, color: theme.app.text, textAlign: 'center' }}>Level Preview</Text>
                    <Video shouldPlay={false}
                           style={styles.video}
                           source={{
                               uri: l.streamedVideo,
                           }}
                           useNativeControls
                           resizeMode={ResizeMode.STRETCH}
                           isLooping
                    />
                </View>
            );
        })

        setImages(images);
        setChromaVideos(chromaVideos);
        setLevelVideos(levelVideos);
    }

    useEffect(() => {
        initSkinInfo();
        return () => {};
    }, []);

    return(
        <Modal style={styles.modal} animationType="slide" transparent={true} visible={isModalVisible}>
            <View style={[styles.container, {backgroundColor: theme.weapon.background}]}>

                <Pressable style={styles.pressable} onPress={onModalClose}>
                    <Ionicons name="ios-close-outline" size={24} color={theme.weapon.close} />
                </Pressable>

                <SwiperWindow containerStyle={{ flex: 1 }} theme={theme} contentArray={levelVideos} />
                <SwiperWindow containerStyle={{ flex: 1 }} theme={theme} contentArray={chromaVideos} />
                <SwiperWindow containerStyle={{ flex: 1, marginTop: '5%' }} contentArray={images} theme={theme}/>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: "15%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#212121",

    },
    pressable: {
        width: '10%',
        height: '5%',
    },
    video: {
         flex: 1,
    },
    skinContainer: {
        flex: 5,
    },
    swatchContainer: {
        flex: 0.12,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        marginTop: "10%",
    },
    swatch: {
        flex: 0.18,
        height: "100%",
    },
    skin: {
        flex: 0.5,
        top: "-5%",
        resizeMode: "contain",
    },
});

export default SkinInfo;