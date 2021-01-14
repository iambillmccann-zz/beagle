import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

function HelloWorld() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Text style={styles.titleText}>Hello, world!</Text>
        <Text style={styles.tagLine}>I think, therefore I am.</Text>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0091FF",
  },
  titleText: {
    fontSize: 46,
    height: 60,
    fontFamily: "Poppins_600SemiBold",
    color: '#D8EEFF',
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    fontFamily: "Poppins_300Light",
    color: '#D8EEFF',
    textAlign: "center",
    width: 250,
    padding: 0,
    margin: 0,
  },
});

export default HelloWorld;
