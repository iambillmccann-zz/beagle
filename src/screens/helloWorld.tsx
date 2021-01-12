import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const HelloWorld = () => {
  
  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  // Render the screen
  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Text style={styles.titleText}>Hello, World</Text>
        <Text style={styles.tagLine}>i think, therefore i am</Text>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0091FF',
  },
  titleText: {
    fontSize: 46,
    height: 60,
    fontFamily: 'Poppins_600SemiBold',
    color: '#E9F1F7',
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    fontFamily: 'Poppins_300Light',
    textAlign: 'center',
    color: '#E9F1F7',
    width: 250,
    padding: 0,
    margin: 0,
  },
});

export default HelloWorld;
