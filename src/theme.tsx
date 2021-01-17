import { DefaultTheme } from 'react-native-paper';

const fontConfig = {
    default: {
      regular: {
        fontFamily: "Roboto",
      },
      medium: {
        fontFamily: "Roboto",
      },
      light: {
        fontFamily: "Roboto",
      },
      thin: {
        fontFamily: "Roboto",
      },
    },
  };
  
  export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3ab54a',
        secondary: '#414757',
        error: '#f13a59',
        green: '#090',
        red: '#c00',
        link: '#39f',
        surface: "#0091FF",
        text: "#E9F1F7",
    },
};