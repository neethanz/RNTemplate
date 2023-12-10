import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Example, Startup } from "@/screens";
import { useTheme } from "@/theme";

import type { ApplicationStackParamList } from "@/types/navigation";
import DrawerNavigator from "./DrawerNavigator";
import { AuthNavigator } from "./AuthNavigator";

const Stack = createStackNavigator<ApplicationStackParamList>();

function RootNavigator({}) {
  const { variant, navigationTheme } = useTheme();

  const isLoggedIn = true;

  const drawerNavigator = (
    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
  );
  const authNavigator = (
    <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        {isLoggedIn ? drawerNavigator : authNavigator}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
