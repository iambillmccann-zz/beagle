// import React, { useState, useEffect } from "react";
import React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
// import {
//   useFonts,
//   Poppins_300Light,
//   Poppins_600SemiBold,
// } from '@expo-google-fonts/poppins';

function Splash() {
  // let [fontsLoaded] = useFonts({
  //   Poppins_300Light: "../assets/fonts/Poppins_300Light.ttf",
  //   Poppins_600SemiBold: "../assets/fonts/Poppins_600SemiBold.ttf",
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    return (
      <Surface style={styles.surface}>
        <Text style={styles.titleText}>PillSmart</Text>
        <Text style={styles.tagLine}>building healthy habits</Text>
      </Surface>
    );
  // }
}

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    // fontFamily: "Poppins_600SemiBold",
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    // fontFamily: "Poppins_300Light",
    padding: 0,
    margin: 0,
  },
});

export default Splash;
