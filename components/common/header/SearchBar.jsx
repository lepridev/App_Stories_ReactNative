import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";

import { icons } from "../../../constants";
import styles from "./searchbar.style";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Trouver quelque chose"
        />
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
