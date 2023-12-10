import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function CButton({ mode, text, icon, onPress }) {
  return (
    <Button mode={mode} onPress={onPress}>
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({});
