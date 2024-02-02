import {Animated, FlatList, ImageBackground, Text, View} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import {LinearGradient} from "expo-linear-gradient";
import Timer from "./timer";
import {useContext} from "react";
import {ThemeContext} from "../Contexts/themeContext";

const StoreHeader = ({ textComponent, headerHeight, imageStyle, banner  }) => {

    return(
        <Animated.View style={{ height: headerHeight }}>

            <MaskedView maskElement={

                    <LinearGradient
                        style={{ flex: 1 }}
                        colors={['#F3F3F7', '#F3F3F700']}
                        start={{x: 0, y: 0.95}}
                        end={{x: 0, y: 1}}
                    />
            }>

                <ImageBackground style={imageStyle} source={banner}>
                    {textComponent}
                </ImageBackground>

            </MaskedView>

        </Animated.View>
    );
}

export default StoreHeader;