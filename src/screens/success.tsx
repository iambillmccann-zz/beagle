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

const Success = (props) => {

  // The useEffect hook handles automatic navigation to the sign-in page
  const { navigate } = props.navigation;

  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  // Render the screen
  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Text style={styles.titleText}>Setup</Text>
        <Text style={styles.titleText}>Successful</Text>
        <View style={{ paddingVertical: 25 }}>
          <Text style={styles.tagLine}>Press the side button on</Text>
          <Text style={styles.tagLine}>PillSmart when prompted</Text>
        </View>
        <Icon name='check-circle' size={150} color='#E9F1F7' style={{paddingVertical:25}} />
        <TouchableOpacity style={{ width: 200, marginVertical: 10 }}>
          <Button
            mode='contained'
            color='#E9F1F7'
            style={styles.button}
            labelStyle={styles.label}
            onPress={() => navigate('Today')}>Close</Button>
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
    fontSize: 18,
    fontFamily: 'Poppins_300Light',
    color: '#E9F1F7',
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
    color: '#0091FF',
  },
});

export default Success;
