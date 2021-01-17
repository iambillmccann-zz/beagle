import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const Saving = (props) => {

  // The useEffect hook handles automatic navigation to the sign-in page
  const { navigate } = props.navigation;
  useEffect(() => {
    const timer = setTimeout(() => { navigate('Success'); }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  // Render the screen
  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Text style={styles.titleText}>Saving on</Text>
        <Text style={styles.titleText}>Dispenser</Text>
        <View style={{ paddingVertical: 25 }}>
          <Text style={styles.tagLine}>Make sure dispenser</Text>
          <Text style={styles.tagLine}>is near this phone</Text>
        </View>
        <Icon name='bluetooth' size={100} color='#0091FF' style={{paddingVertical:25}} />
        <Text style={styles.tagLine}>Please wait...</Text>
        <TouchableOpacity style={{ width: 200, marginVertical: 25 }}>
          <Button
            mode='contained'
            color='#0091FF'
            style={styles.button}
            labelStyle={styles.label}
            onPress={() => navigate('Setup3')}>&lt; Go Back</Button>
        </TouchableOpacity>
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
    backgroundColor: '#E9F1F7',
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
    fontSize: 18,
    fontFamily: 'Poppins_300Light',
    color: '#0091FF',
    textAlign: 'center',
    width: 250,
    padding: 0,
    margin: 0,
  },
  button: {
    marginVertical: 20,
    borderRadius: 30,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#E9F1F7',
  },
});

export default Saving;
