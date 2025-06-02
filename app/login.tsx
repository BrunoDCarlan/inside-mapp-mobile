import {View,Text,TextInput,TouchableOpacity,Image,Animated,Easing,} from "react-native";
import styles from "../styles/login";
import { useState, useEffect, useRef } from "react";
import { router } from "expo-router";
import { useAuth } from "../contexts/AuthContext";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const logoTranslateY = useRef(new Animated.Value(0)).current;
  const API_URL = "http://192.168.15.23:8080"; // provisório
  const { setUser } = useAuth();

  const animateLogoUp = () => {
    Animated.timing(logoTranslateY, {
      toValue: -60,
      duration: 600,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start(() => setShowLogin(true));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/entrar`, {
        email,
        senha,
      });

      const { token } = response.data;
      await AsyncStorage.setItem("authToken", token);
      setUser({ ...response.data.usuario, token });

      Alert.alert("Sucesso", "Login realizado com sucesso!");
      router.replace("/menu");
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

  const handleGuestLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/guest`);

      const { token } = response.data;
      router.replace("/menu");
    } catch (error: any) {
      Alert.alert("Erro", "Ocorreu um erro inesperado");
    }
  };

  return (
    <View style={[styles.container, showLogin && styles.containerLogin]}>
      <Animated.View
        style={[
          styles.logoContainer,
          { transform: [{ translateY: logoTranslateY }] },
        ]}
      >
        <Image
          source={require("../assets/logo-inside-mapp-com-letreiro.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      {!showLogin && (
        <View style={styles.formWelcomeContainer}>
          <Text style={styles.title}>Bem-vindo ao Inside Mapp</Text>
          <Text style={styles.subtitle}>
            O mapa que pensa em todos os passos
          </Text>

          <TouchableOpacity
            style={[styles.loginButton, styles.loginButtonEntrar]}
            onPress={animateLogoUp}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      )}

      {showLogin && (
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          duration={800}
          style={styles.formContainer}
        >
          <Text style={styles.subtitle}>Seja bem vindo!</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={[styles.loginButton, styles.loginButtonEntrar]}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.loginButton, styles.loginButtonCadastrar]}
            onPress={handleCadastro}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGuestLogin} activeOpacity={0.7}>
            <Text style={styles.guestLink}>Entrar como convidado</Text>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </View>
  );
}
