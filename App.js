/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
      fontFamily: 'Roboto',
    },
    medium: {
      fontFamily: 'Roboto Medium',
    },
    light: {
      fontFamily: 'Roboto Light',
    },
    thin: {
      fontFamily: 'Roboto Thin',
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
  return (
    <>
      <PaperProvider theme={theme}>
        <Splash />
      </PaperProvider>
    </>
  );
};

export default App;
