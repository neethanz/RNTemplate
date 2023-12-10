import Login from "@/screens/auth_screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View } from "react-native";

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen
        name="MFA"
        component={MFA}
        options={{ headerShown: true, title: "OTP Verification" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: true, title: "Reset Password" }}
      />

      <Stack.Screen
        name="DeveloperOptions"
        component={DeveloperOptions}
        options={{ headerShown: true, title: "Developer Options" }}
      />
      <Stack.Screen
        name="ChangeBaseUrl"
        component={ChangeBaseUrl}
        options={{
          headerShown: true,
          title: "Change Base Url",
          // headerBackVisible: false
        }}
      /> */}
    </Stack.Navigator>
  );
};
