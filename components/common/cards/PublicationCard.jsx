import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./publicationCard.style";
import { COLORS } from "../../../constants";

const PublicationCard = ({ imgUrl, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imgUrl} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.titleDescContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            asperiores quas temporibus, harum deleniti blanditiis fugit nobis
            dolorem alias praesentium ad id, ab quo eum itaque molestiae.
            Suscipit, dolorem commodi!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              backgroundColor: COLORS.blue,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: COLORS.lightWhite }}>Voir+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 15,
              paddingVertical: 7,
              backgroundColor: COLORS.primary,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: COLORS.lightWhite }}>Commenter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PublicationCard;
