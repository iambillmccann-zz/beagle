import * as React from 'react';
import {Surface, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Splash = () => (
  <Surface style={styles.surface}>
    <Text style={styles.titleText}>PillSmart</Text>
    <Text style={styles.tagLine}>building healthy habits</Text>
  </Surface>
);

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Poppins_600SemiBold',
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 15,
    fontFamily: 'Poppins_300Light',
    padding: 0,
    margin: 0,
  },
});

export default Splash;
