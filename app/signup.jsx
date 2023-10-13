import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

import styles from "../styles/signup.style";
import { images } from "../constants";

const SignUp = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={images.signup}
            />
          </View>

          <View style={styles.formTitleContainer}>
            <Text style={styles.title}>Vous n'etes pas encore inscrit ?</Text>
          </View>
          <View style={styles.formInputContainer}>
            <Text style={styles.inputLabel}>Entrez un e-mail</Text>
            <TextInput style={styles.input} placeholder="Entrez votre e-mail" />
            <Text style={styles.inputLabel}>Entrez un mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder="Entrez votre mot de passe"
            />
            <Text style={styles.inputLabel}>Verifier votre mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirmez votre mot de passe"
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

export default SignUp;
