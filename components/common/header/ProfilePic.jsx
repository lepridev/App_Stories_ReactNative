import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./profilepic.style";
import { images } from "../../../constants";

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.user} />
      </View>
    </View>
  );
};

export default ProfilePic;
