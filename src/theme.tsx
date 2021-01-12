import { DefaultTheme, configureFonts } from 'react-native-paper';
// import {
//     useFonts,
//     Poppins_100Thin,
//     Poppins_300Light,
//     Poppins_400Regular,
//     Poppins_500Medium,
//   } from "@expo-google-fonts/poppins";

const fontConfig = {
    default: {
        regular: {
            fontFamily: "Poppins_400Regular",
        },
        medium: {
            fontFamily: "Poppins_500Medium",
        },
        light: {
            fontFamily: "Poppins_300Light",
        },
        thin: {
            fontFamily: "Poppins_100Thin",
        },
    },
};

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0091FF',
        secondary: '#E9F1F7',
        error: '#f13a59',
        green: '#090',
        red: '#c00',
        link: '#39f',
        surface: "#0091FF",
        text: "#E9F1F7",
    },
    fonts: configureFonts(fontConfig),
};