import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../assets";
import Icon from 'react-native-vector-icons/FontAwesome';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleRegister = () => {
    navigation.navigate("Login");
    // Perform registration logic
    Alert.alert(
      "Registrasi Berhasil",
      "Akun Anda berhasil terdaftar."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={Logo} style={styles.logo} />

        <View style={styles.inputIconContainer}>
          <Icon name="user" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

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
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputIconContainer}>
          <Icon name="lock" size={20} color="#aaa" style={styles.inputIcon} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            value={confirm_password}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={styles.registerButton}
      >
        <Text style={styles.buttonTextRegister}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.backButton}
      >
        <Text style={styles.buttonTextBack}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 5,
    justifyContent:"center",
  },
  inputContainer: {
    marginBottom: 20,
    width: 250,
    paddingTop: 20,
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
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
  },
  inputIcon: {
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    width: 250,
  },
  backButton: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
  },
  buttonTextRegister: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonTextBack: {
    color: "#B6C4B6",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
