import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { Button, Surface } from 'react-native-paper';
import AppTextInput from '../components/AppTextInput';
import AppTextButton from '../components/AppTextButton';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const SignIn = (props) => {

  const { navigate } = props.navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Surface style={styles.header}>
          <Text style={styles.headerText}>WELCOME</Text>
          <Text style={styles.headerTitle}>Sign in with</Text>
          <Text style={styles.headerTitle}>your Email</Text>
        </Surface>
        <View style={styles.form}>
          <AppTextInput
            labelText='EMAIL ADDRESS'
            value={email}
            placeholder='Type email address'
            onChangeText={email => setEmail(email)} />
          <AppTextInput
            labelText='PASSWORD'
            value={password}
            placeholder='Type password'
            onChangeText={email => setEmail(password)} />
          <AppTextButton
            labelText='Forgot password?'
            onPress={() => navigate('HelloWorld')} />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.signin}>
            <Button
              mode='contained'
              color='#0091FF'
              style={styles.button}
              onPress={() => navigate('Today')}>Sign in</Button>
          </TouchableOpacity>
          <AppTextButton
            labelText='Create account'
            onPress={() => navigate('SignUp')} />
        </View>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 7,
  },
  header: {
    flex: 2,
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: 25,
    backgroundColor: '#0091FF',
  },
  form: {
    flex: 3,
    justifyContent: 'flex-start',
    textAlign: 'left',
    backgroundColor: '#E9F1F7',
    color: '#0091FF',
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#E9F1F7',
    color: '#0091FF',
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
  button: {
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  signin: {
    width: 160,
  },
});

export default SignIn;
