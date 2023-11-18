import {Modal, Pressable, View, StyleSheet, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {ResizeMode, Video} from "expo-av";
import {useState} from "react";

const SkinInfo = ({ isModalVisible, onModalClose }) => {
    const [getVideo, setVideo] = useState("https://valorant.dyn.riotcdn.net/x/videos/release-07.10/b3d2c635-4835-0e42-e05f-36a156bbd3d7_default_universal.mp4");
    const [getChroma, setChroma] = useState("https://media.valorant-api.com/weaponskinchromas/a833b92c-4981-6d12-191d-25b85f5d8bd5/displayicon.png");

    return(
        <Modal style={styles.modal} animationType="slide" transparent={true} visible={isModalVisible}>
            <View style={styles.container}>

                <Pressable style={styles.pressable} onPress={onModalClose}>
                    <Ionicons name="ios-close-outline" size={24} color="white" />
                </Pressable>

                <View style={styles.video}>
                    <Video shouldPlay={true}
                        style={styles.video}
                        source={{
                            uri: getVideo,
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.STRETCH}
                        isLooping
                    />
                </View>
                <View style={styles.skinContainer}>
                    <View style={styles.swatchContainer}>

                        <Pressable style={styles.swatch}
                                   onPress={() => {
                                       setVideo("https://valorant.dyn.riotcdn.net/x/videos/release-07.10/4c0cf557-4af3-c2c9-8a12-38ac2f62555e_default_universal.mp4");
                                       setChroma("https://media.valorant-api.com/weaponskinchromas/a833b92c-4981-6d12-191d-25b85f5d8bd5/displayicon.png")}}>
                            <Image
                                source={{ uri: "https://media.valorant-api.com/weaponskinchromas/a833b92c-4981-6d12-191d-25b85f5d8bd5/swatch.png" }}
                                style={ { flex: 1 } }
                            />
                        </Pressable>

                        <Pressable style={styles.swatch}
                                   onPress={()=>{
                                       setVideo("https://valorant.dyn.riotcdn.net/x/videos/release-07.10/d2e283a1-4c2b-1cee-e7c6-d2a314031595_default_universal.mp4");
                                       setChroma("https://media.valorant-api.com/weaponskinchromas/2adcfe05-411d-e586-3dff-a6a201b7216b/displayicon.png");
                                   }} >
                            <Image
                                source={{ uri: "https://media.valorant-api.com/weaponskinchromas/2adcfe05-411d-e586-3dff-a6a201b7216b/swatch.png" }}
                                style={ { flex: 1 } }
                            />
                        </Pressable>

                        <Pressable style={styles.swatch}
                                   onPress={() => {
                                       setVideo("https://valorant.dyn.riotcdn.net/x/videos/release-07.10/effe0430-43f4-580a-d7b0-c592c8d16a7a_default_universal.mp4");
                                       setChroma("https://media.valorant-api.com/weaponskinchromas/7bcf9469-49ee-7962-f644-369f80299a8e/displayicon.png");}}>
                            <Image
                                source={{ uri: "https://media.valorant-api.com/weaponskinchromas/7bcf9469-49ee-7962-f644-369f80299a8e/swatch.png" }}
                                style={ { flex: 1 } }
                            />
                        </Pressable>

                        <Pressable style={styles.swatch}
                                   onPress={() => {
                                       setVideo("https://valorant.dyn.riotcdn.net/x/videos/release-07.10/9fcb5d59-493c-58ef-8c63-5a8850f91e73_default_universal.mp4");
                                       setChroma("https://media.valorant-api.com/weaponskinchromas/51a72cb8-466b-119c-7544-f892ca486801/displayicon.png")
                                   }} >
                            <Image
                                source={{ uri: "https://media.valorant-api.com/weaponskinchromas/51a72cb8-466b-119c-7544-f892ca486801/swatch.png" }}
                                style={ { flex: 1 } }
                            />
                        </Pressable>

                    </View>

                    <Image style={styles.skin} source={{ uri: getChroma } }/>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "flex-end",

    },
    container: {
        flex: 1,
        marginTop: "15%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#212121",
    },
    pressable: {
        flex: 0.5,
        width: "10%",
    },
    video: {
        flex: 2,
        // backgroundColor: "red",
    },
    skinContainer: {
        flex: 5,
        // backgroundColor: "green",
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