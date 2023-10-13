import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

import styles from "./screenheader.style";
const ScreenHeaderBtn = ({ iconUrl, handlePress, dimension, url }) => {
  return (
    <Link href={url} asChild>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image
          style={styles.btnImg(dimension)}
          resizeMode="cover"
          source={iconUrl}
        />
      </TouchableOpacity>
    </Link>
  );
};

export default ScreenHeaderBtn;
