import React, { useState, useEffect } from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { useMyFonts } from "../contexts/useMyFonts";

const Splash = () => {
  let [fontsLoaded, error] = useMyFonts({
    Poppins_300Light: "../assets/fonts/Poppins_300Light.ttf",
    Poppins_600SemiBold: "../assets/fonts/Poppins_600SemiBold.ttf",
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Surface style={styles.surface}>
        <Text style={styles.titleText}>PillSmart</Text>
        <Text style={styles.tagLine}>building healthy habits</Text>
      </Surface>
    );
  }
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    fontFamily: "Poppins_600SemiBold",
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    fontFamily: "Poppins_300Light",
    padding: 0,
    margin: 0,
  },
});

export default Splash;
