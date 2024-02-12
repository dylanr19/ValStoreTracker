import {Animated, FlatList, ScrollView, StyleSheet, View} from "react-native";
import Weapon from "./weapon";

const Weapons = ({ weapons, color, scrollY = null }) => {

    const renderItem = ({ item }) => (
        <Weapon
            key={item.uuid}
            name={item.displayName}
            price={item.price}
            color={color}
            image={item.displayIcon}
            showImage={item.showImage}
            showVP={item.showVP}
        >
        </Weapon>
    );

    const scrollEvent = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } },],
        { useNativeDriver: false });

    return(
        <>
            {weapons && (
                <FlatList
                    // scrollEventThrottle={16}
                    // onScroll={scrollY !== null ? scrollEvent : null}

                    style={styles.weaponsContainer}
                    data={weapons}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.displayName}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: "15%",
        flexDirection: "column",
    }
});

export default Weapons;