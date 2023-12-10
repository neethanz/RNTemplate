import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions, View } from "react-native";
import { HomeNavigator } from "./HomeNavigator";
import MyComponent from "@/screens/drawer/AppDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MyComponent />}
      screenOptions={{
        // headerShown: false,
        drawerStyle: {
          width: Dimensions.get("window").width * 0.8,
        },
      }}
    >
      <Drawer.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: "",
        }}
      />
    </Drawer.Navigator>
  );
}
