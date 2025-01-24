import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface ImageUserProps {
    image?: ImageSourcePropType
}

const ImageUser: React.FC<ImageUserProps> = ({ image }) => {
    if (!image){
        image = require("../assets/images/user.png");
    }
    return (
        <Image source={image} style={styles.image} />
    )
}

const styles =  StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#FFFFFF30",
        margin: 10
    }
});


export default ImageUser;