/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useFonts } from 'expo-font';
import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Splash from './components/splash';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'poppins-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    surface: '#0091FF',
    text: '#E9F1F7',
  },
};

const App = () => {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Poppins-Bold.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-BoldItalic.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-Italic.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-Light.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-LightItalic.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-Medium.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Inter-Black': require('./assets/fonts/Poppins-Thin.ttf'),
  })

  return (
    <>
      <PaperProvider theme={theme}>
        <Splash />
      </PaperProvider>
    </>
  );
};

export default App;
