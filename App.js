import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { InputRange } from "./src/components/InputRange";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <InputRange
        minValue={0}
        maxValue={100}
        onChangeMin={(v) => console.log(v)}
        onChangeMax={(v) => console.log(v)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
