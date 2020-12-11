import * as React from "react";
import { useFonts } from "expo-font";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

const Splash = () => {
  let [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  loadedText = fontsLoaded ? "Loaded is true" : "Loaded is false";
  return (
    <Surface style={styles.surface}>
      <Text style={styles.titleText}>PillSmart</Text>
      <Text style={styles.tagLine}>building healthy habits</Text>
      <Text>Error = {error}</Text>
      <Text style={{ fontFamily: 'Poppins-SemiBold' }} >{loadedText}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    fontFamily: "Poppins-SemiBold",
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    fontFamily: "Poppins-Light",
    padding: 0,
    margin: 0,
  },
});

export default Splash;
