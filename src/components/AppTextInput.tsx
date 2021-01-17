import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { theme } from '../theme';
import { AppLoading } from 'expo';
import {
    useFonts,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

type Props = React.ComponentProps<typeof TextInput> & { errorText?: string };

const AppTextInput = ({ labelText, errorText, ...props }: Props) => {

    // Load the fonts needed on this page
    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
    });

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <TextInput
                    mode='outlined'
                    selectionColor='#0091FF'
                    underlineColor='#0091FF'
                    style={styles.textBox}
                    {...props} />
            </View>
        )
    } else {
        return <AppLoading />;
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    label: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#0091FF',
        textAlign: 'left',
        padding: 20,
        paddingBottom: 0,
    },
    textBox: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: '#0091FF',
        backgroundColor: '#D8EEFF',
        marginHorizontal: 20,
        borderColor: '#0091FF',
    },
});

export default AppTextInput