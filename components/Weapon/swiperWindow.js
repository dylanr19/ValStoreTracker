import Swiper from "react-native-swiper";
import {Image, Text, View} from "react-native";

const SwiperWindow = ({ containerStyle, contentArray, theme }) => {

    const placeholder =
        <View style={{ flex: 1 }}>
            <Text style={{ flex: 0.1, marginTop: '5%', color: theme.app.text, textAlign: 'center' }}>Video not available</Text>
            // <Image style={ { flex: 1, aspectRatio: 2 } } source={require('C:\\Users\\GIGABYTE\\WebstormProjects\\ValStoreTracker\\assets\\images\\notfoundPlaceholderpng.png')}></Image>
        </View>

    return(
        <Swiper containerStyle={containerStyle}
                dotColor={theme.swiper.dot}
                activeDotColor={theme.swiper.activeDot}
                showsButtons={true}
                prevButton={<Text style={{ color: theme.swiper.arrow, fontSize: 30, right: "70%" }}>‹</Text>}
                nextButton={<Text style={{ color: theme.swiper.arrow, fontSize: 30, left: "70%" }}>›</Text>}
        >
            {contentArray.length !== 0 ? contentArray.map(content => (
                content
            )) : placeholder}
        </Swiper>
    );
}

export default SwiperWindow;
