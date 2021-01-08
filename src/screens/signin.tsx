import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { AppLoading } from "expo";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { TextInput } from "react-native-gesture-handler";

function SignIn(props) {
  const { control, handleSubmit, errors } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (fontsLoaded) {
    return (
      <View style={styles.page}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Please type your email address" }}
            onFocus={() => {}}
            render={(props) => (
              <TextInput
                {...props}
                style={styles.input}
                label="EMAIL ADDRESS"
                placeholder="Type email address"
                onChangeText={(value) => props.onChange(value)}
              />
            )}
          />
          <Text style={styles.label}>PASSWORD</Text>
          <Controller name="password" control={control} />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Please type password" }}
            onFocus={() => {}}
            render={(props) => (
              <TextInput
                {...props}
                style={styles.input}
                label="Password"
                placeholder="Type password"
                type="outlined"
                onChangeText={(value) => props.onChange(value)}
              />
            )}
          />
          <Button type="contained" style={styles.button} onPress={handleSubmit(onsubmit)}>
            Sign In
          </Button>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: "#0091FF",
  },
  label: {
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    backgroundColor: "#ec5990",
    height: 40,
    borderRadius: 4,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default SignIn;
