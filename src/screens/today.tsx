import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { Surface, Button } from 'react-native-paper';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const Today = (props) => {

  const { navigate } = props.navigation;

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Surface style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headerGreeting}>Hi, </Text>
            <Text style={[styles.headerGreeting, {fontFamily: 'Poppins_300Light'}]}>Bill</Text>
          </View>
          <Text style={styles.headerText}>COMING UP</Text>
          <Text style={styles.headerTitle}>Adderall</Text>
          <Text style={styles.headerGreeting}>15 mg at 2:00 PM</Text>
        </Surface>
        <View style={styles.form}>
          <Text style={styles.titleText}>Hello, world!</Text>
          <Text style={styles.tagLine}>The Today home page goes here.</Text>
          <TouchableOpacity style={{ width: 220, marginVertical: 50 }}>
            <Button
              mode='contained'
              color='#0091FF'
              style={styles.button}
              onPress={() => navigate('Meds')}>Meds</Button>
            <Button
              mode='contained'
              color='#0091FF'
              style={styles.button}
              onPress={() => navigate('Stats')}>Stats</Button>
            <Button
              mode='contained'
              color='#0091FF'
              style={styles.button}
              onPress={() => navigate('HelloWorld')}>More</Button>
          </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    padding: 40,
    backgroundColor: '#0091FF',
  },
  form: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#E9F1F7',
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'Poppins_300Light',
    color: '#E9F1F7',
    marginVertical: 20,
  },
  headerGreeting: {
    fontSize: 24,
    fontFamily: 'Poppins_500Medium',
    color: '#E9F1F7',
  },
  headerTitle: {
    fontSize: 40,
    height: 60,
    fontFamily: 'Poppins_600SemiBold',
    color: '#E9F1F7',
  },
  titleText: {
    fontSize: 46,
    height: 60,
    fontFamily: 'Poppins_600SemiBold',
    color: '#0091FF',
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    fontFamily: 'Poppins_300Light',
    textAlign: 'center',
    color: '#0091FF',
    width: 250,
    padding: 0,
    margin: 0,
  },
  button: {
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
});

export default Today;
