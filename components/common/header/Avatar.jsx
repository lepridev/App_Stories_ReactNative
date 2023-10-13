import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "./avatar.style";
import { images } from "../../../constants";

const Avatar = ({ name = "Armand Lepri", title = "Detail", imgUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imgUrl} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Link href={"/(users)"} asChild>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.btnTitle}>{title}</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Avatar;
