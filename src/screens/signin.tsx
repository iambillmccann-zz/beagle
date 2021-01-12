import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextInput from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AppLoading } from 'expo';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const SignIn = (props) => {

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
        <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
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
    backgroundColor: '#0091FF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: 25,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins_300Light',
    color: '#E9F1F7',
    paddingTop: 100,
  },
  headerTitle: {
    fontSize: 46,
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
