import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

function SignIn(props) {

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
        <View style={styles.header}>
          <Text style={styles.headerText}>WELCOME</Text>
          <Text style={styles.headerTitle}>Sign in with</Text>
          <Text style={styles.headerTitle}>your Email</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formText}>EMAIL ADDRESS</Text>
          <TextInput
            mode='outlined'
            value={email}
            placeholder='Type email address'
            underlineColor='#0091FF'
            style={styles.formInput}
            onChangeText={email => setEmail(email)} />
          <Text style={styles.formText}>PASSWORD</Text>
          <TextInput
            mode='outlined'
            value={password}
            placeholder='Type password'
            underlineColor='#0091FF'
            style={styles.formInput}
            onChangeText={password => setPassword(password)} />
          <Button
            mode='text'
            style={styles.button}
            onPress={() => navigate('HelloWorld')}>Forgot password?</Button>
        </View>
        <View style={styles.footer}>
          <Button
            mode='contained'
            style={styles.button}
            onPress={() => navigate('HelloWorld')}>Sign in</Button>
          <Button
            mode='text'
            style={styles.button}
            onPress={() => navigate('HelloWorld')}>Create account</Button>
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
    backgroundColor: '#0091FF',
  },
  header: {
    flex: 2,
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: 25,
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
    justifyContent: 'flex-start',
    textAlign: 'center',
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
  formText: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#0091FF',
    textAlign: 'left',
    padding: 20,
    paddingBottom: 0,
    marginTop: 10,
  },
  formInput: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#0091FF',
    backgroundColor: '#D8EEFF',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 1,
  },
  button: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#0019FF',
    margin: 20,
  },
});

export default SignIn;
