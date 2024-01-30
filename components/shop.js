import Swiper from 'react-native-swiper';
import {AppState, Text} from "react-native";
import Bundle from "./Bundle";
import Daily from "./daily";
import {useEffect, useState} from "react";

const Shop = () => {

    const [isForeground, setIsForeground] = useState(true);

    // Starts the app state listener to notify child components when app is foregrounded
    useEffect(() => {
       const handleAppStateChange = (nextAppState) =>  {
           if(nextAppState === 'active') {
               setIsForeground(true);
           } else if (nextAppState === 'background') {
               setIsForeground(false);
           }
       }

       // start the app state listener
       const subscription = AppState.addEventListener('change', handleAppStateChange);

       // prevent memory leaks if component unmounts
       return () => {
           subscription.remove();
       }
    }, []);

    return(
        <Swiper dotColor={"gray"}
                activeDotColor={"tomato"}
                showsButtons={true}
                prevButton={<Text style={{ color: "gray", fontSize: 30, right: "70%" }}>‹</Text>}
                nextButton={<Text style={{ color: "gray", fontSize: 30, left: "70%" }}>›</Text>}
        >
            <Bundle isForeground={isForeground}></Bundle>
            <Daily isForeground={isForeground}></Daily>
        </Swiper>
    );
}

export default Shop;