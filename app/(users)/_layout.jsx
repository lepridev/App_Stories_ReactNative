import { Tabs } from "expo-router";
import { icons, images } from "../../constants";
import { ScreenHeaderBtn } from "../../components";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        headerShown="true"
        options={{
          headerStyle: {
            backgroundColor: "#F1F1F1",
          },
          headerShadowVisible: false,
          headerTitle: "Profile",
          headerShown: true,
          headerLeft: () => (
            <ScreenHeaderBtn
              url={"/"}
              iconUrl={icons.chevronLeft}
              dimension={"60%"}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              url={"/login"}
              iconUrl={images.user}
              dimension={"60%"}
            />
          ),
        }}
      />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
