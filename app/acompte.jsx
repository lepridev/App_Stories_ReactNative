import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

import styles from "../styles/acompte.style";
import { COLORS, images } from "../constants";

const acompte = () => {
  return (
    <View style={styles.acompteContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.acompte} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formTitleContainer}>
          <Text style={styles.title}>Vous n'etes pas encore inscrit ?</Text>
        </View>
        <View style={styles.formInputContainer}>
          <Link href={"/login"} asChild>
            <TouchableOpacity style={styles.bouttons}>
              <Text style={styles.text}>Connexion</Text>
            </TouchableOpacity>
          </Link>
          <Link href={"signup"} asChild>
            <TouchableOpacity style={styles.bouttonsOutline}>
              <Text style={styles.textOutline}>Inscription</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default acompte;
