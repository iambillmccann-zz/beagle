import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../theme';
import { AppLoading } from 'expo';
import {
    useFonts,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

type Props = React.ComponentProps<typeof Button> & { errorText?: string };

const AppTextButton = ({ labelText, ...props }: Props) => {

    // Load the fonts needed on this page
    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
    });

    return (
        <Button
            mode='text'
            style={[styles.button, styles.forgot]}
            labelStyle={styles.forgotLabel}
            {...props}>{labelText}</Button>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    button: {
        marginVertical: 20,
        paddingVertical: 10,
        borderRadius: 30,
    },
    forgot: {
        width: 240,
    },
    forgotLabel: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#0091FF',
        borderBottomWidth: 1,
        borderBottomColor: '#0091FF',
      },
    });

export default AppTextButton