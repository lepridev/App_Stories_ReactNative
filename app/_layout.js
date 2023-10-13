import { Stack } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { icons } from "../constants";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "home",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerTitle: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: "#F1F1F1",
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: true,
          headerLeft: () => (
            <ScreenHeaderBtn url={"/"} iconUrl={icons.menu} dimension={"60%"} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              url={"/acompte"}
              iconUrl={icons.google}
              dimension={"60%"}
            />
          ),
        }}
      />
      <Stack.Screen name="(users)" options={{ headerShown: false }} />
      <Stack.Screen
        name="acompte"
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
