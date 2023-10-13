import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import React from "react";

import { SIZES, icons, images } from "../constants";

import {
  ScreenHeaderBtn,
  Avatar,
  SearchBar,
  PublicationCard,
} from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#F1F1F1",
          },
          headerShadowVisible: false,
          headerTitle: "Home",
          headerShown: true,
          headerLeft: () => (
            <ScreenHeaderBtn
              url={"/signup"}
              iconUrl={icons.menu}
              dimension={"60%"}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              url={"/login"}
              iconUrl={icons.google}
              dimension={"60%"}
            />
          ),
        }}
      /> */}
      <ScrollView showsVerticalScrollIndicator="false">
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text
            style={{
              fontSize: SIZES.large,
              textAlign: "center",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Bienvenue sur votre App
          </Text>
          <View>
            <SearchBar />
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: SIZES.medium, fontWeight: "bold" }}>
                Utilisateurs à la l'une
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator="false">
              <View style={{ gap: 5 }}>
                <View style={{ flexDirection: "row", marginTop: 10, gap: 8 }}>
                  <Avatar
                    name="Armand Lepri"
                    title="Voir"
                    imgUrl={images.user}
                  />
                  <Avatar name="Ruth Lepri" title="Voir" imgUrl={images.user} />
                  <Avatar
                    name="Samuel Lepri"
                    title="Voir"
                    imgUrl={images.user}
                  />
                  <Avatar name="Fred Lepri" title="Voir" imgUrl={images.user} />
                </View>
              </View>
            </ScrollView>
            <ScrollView>
              <PublicationCard
                imgUrl={images.maison}
                title={"Heureux d'avoir achevé ma maison"}
              />
              <PublicationCard
                imgUrl={images.transport}
                title={"Une belle ballade avec ma petite famille"}
              />
              <PublicationCard
                imgUrl={images.voyage}
                title={"Besoin d'idée pour ma prochaine destination"}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
