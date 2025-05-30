import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles/login";
import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from '../contexts/AuthContext';

import axios from "axios";
import { Alert } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const API_URL = 'http://192.168.15.23:8080' //provisório
  const { setUser } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/users/entrar`,
        {
          email,
          senha,
        }
      );
      
      console.log(response.data.mensagem, response.data.usuario);
      Alert.alert("Sucesso", "Login realizado com sucesso!");

      setUser(response.data.usuario);
      router.replace('/menu');
    } catch (error: any) {
      if (error.response?.status === 401) {
        Alert.alert("Erro", "Credenciais inválidas");
      } else {
        Alert.alert("Erro", "Ocorreu um erro inesperado");
      }
    }
  };

  const handleCadastro = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-com-letreiro.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.subtitle}>Seja bem vindo!</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={[styles.loginButton, styles.loginButtonEntrar]} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, styles.loginButtonCadastrar]} onPress={handleCadastro}>
          <Text style={styles.loginButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.guestText}>Entrar como convidado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
