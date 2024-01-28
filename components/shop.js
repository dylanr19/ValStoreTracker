import Swiper from 'react-native-swiper';
import { Text} from "react-native";
import Bundle from "./Bundle";
import Daily from "./daily";

const Shop = () => {
    return(
        <Swiper dotColor={"gray"}
                activeDotColor={"tomato"}
                showsButtons={true}
                prevButton={<Text style={{ color: "gray", fontSize: 30, right: "70%" }}>‹</Text>}
                nextButton={<Text style={{ color: "gray", fontSize: 30, left: "70%" }}>›</Text>}
        >
            <Bundle></Bundle>
            <Daily></Daily>
        </Swiper>
    );
}

export default Shop;