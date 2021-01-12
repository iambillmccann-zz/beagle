import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

function SignIn(props) {

  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>WELCOME</Text>
          <Text style={styles.headerTitle}>Sign in with</Text>
          <Text style={styles.headerTitle}>your Email</Text>
        </View>
        <View style={styles.form}>
        </View>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0091FF",
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: 25,
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'Poppins_300Light',
    color: '#E9F1F7',
    paddingTop: 100,
  },
  headerTitle: {
    fontSize: 40,
    height: 60,
    fontFamily: 'Poppins_600SemiBold',
    color: '#E9F1F7',
  },
  form: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#E9F1F7',
    color: '#0091FF',
  }
});

export default SignIn;
