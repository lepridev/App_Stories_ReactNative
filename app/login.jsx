import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import styles from "../styles/login.style";
import { images } from "../constants";

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={images.login}
            />
          </View>

          <View style={styles.formTitleContainer}>
            <Text style={styles.title}>Vous n'etes pas encore inscrit ?</Text>
          </View>
          <View style={styles.formInputContainer}>
            <TextInput style={styles.input} placeholder="Entrez votre e-mail" />
            <TextInput
              style={styles.input}
              placeholder="Entrez votre mot de passe"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.texte}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
