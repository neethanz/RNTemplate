import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

export default function CTextInput({
  label,
  mode,
  placeholder,
  value,
  setValue,
  right,
}) {
  return (
    <TextInput
      mode={mode}
      label={label}
      placeholder={placeholder}
      onChangeText={setValue}
      value={value}
      right={right}
    />
  );
}

const styles = StyleSheet.create({});
