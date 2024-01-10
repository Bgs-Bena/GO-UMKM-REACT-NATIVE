import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Sesuaikan dengan pustaka ikon yang Anda gunakan
import { Logo } from "../assets";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={Logo} style={styles.logoImage} />

        <View style={styles.inputIconContainer}>
          <Icon name="envelope" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputIconContainer}>
          <Icon name="lock" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        style={styles.registerButton}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoImage: {
    width: 250,
    height: 250,
    marginBottom: 5,
  },
  inputIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  loginButton: {
    backgroundColor: "#00BCC9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 200,
  },
});

export default LoginScreen;
