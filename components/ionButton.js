import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import React from "react";

const IonButton = ({ name, size, color, onPress }) => {

    return(
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={name} size={size} color={color} />
        </TouchableOpacity>
    );
}

export default IonButton;