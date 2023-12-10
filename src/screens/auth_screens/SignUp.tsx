import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CButton, CTextInput } from "@/components/atoms";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/theme";

export default function SignUp() {
  const {
    colors,
    variant,
    layout,
    gutters,
    fonts,
    backgrounds,
    borders,
    navigationTheme,
    components,
  } = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  return (
    <View>
      <CTextInput
        label="Email"
        mode="outlined"
        placeholder="Email Address"
        value={email}
        right={null}
        setValue={setEmail}
      />
      <CTextInput
        label="Password"
        mode="outlined"
        placeholder="Password"
        value={password}
        right={null}
        setValue={setPassword}
      />
      <CTextInput
        label="Confirm Password"
        mode="outlined"
        placeholder="Password"
        value={password}
        right={null}
        setValue={setPassword}
      />
      <CTextInput
        label="Mobile Number"
        mode="outlined"
        placeholder="Mobile"
        value={password}
        right={null}
        setValue={setPassword}
      />

      <CButton
        mode="contained"
        text="Login"
        icon={null}
        onPress={() => navigation.navigate("MFA")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
