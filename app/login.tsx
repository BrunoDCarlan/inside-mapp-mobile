import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";
import styles from "../styles/login";
import { useState, useEffect, useRef } from "react";
import { router } from "expo-router";
import { useAuth } from "../contexts/AuthContext";
import * as Animatable from "react-native-animatable";
import type { CustomAnimation } from "react-native-animatable";
import type {
  View as AnimatableView,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const smoothShake: CustomAnimation<ViewStyle & TextStyle & ImageStyle> = {
  0: { translateX: 0 },
  0.25: { translateX: -5 },
  0.5: { translateX: 5 },
  0.75: { translateX: -5 },
  1: { translateX: 0 },
};

Animatable.initializeRegistryWithDefinitions({ smoothShake });

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const logoTranslateY = useRef(new Animated.Value(0)).current;
  const API_URL = "http://192.168.15.23:8080"; // provisório
  const { setUser } = useAuth();
  const emailRef = useRef<Animatable.View & AnimatableView>(null);
  const senhaRef = useRef<Animatable.View & AnimatableView>(null);

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

      router.replace("/menu");
    } catch (error: any) {
      if (error.response?.status === 401) {
        setLoginError(true);
        emailRef.current?.animate("smoothShake" as any, 800);
        senhaRef.current?.animate("smoothShake" as any, 800);
      } else {
        setLoginError(true);
      }
    }
  };

  const handleCadastro = () => {
    router.push("/register");
  };

  const handleGuestLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/guest`);

      const { token, usuario } = response.data;
      setUser({ ...usuario, token });
      router.replace("/menu");
    } catch (error: any) {
      setLoginError(true);
    }
  };

  return (
    <View style={styles.container}>
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
        <View
          style={[
            styles.formContainer,
            { alignItems: "center", flex: 1, justifyContent: "center" },
          ]}
        >
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
          <Text style={styles.subtitle}>Seja bem-vindo!</Text>

          <Animatable.View ref={emailRef} style={{ width: "100%" }}>
            <TextInput
              style={[styles.input, loginError && styles.inputError]}
              placeholder="E-mail"
              placeholderTextColor="#94a3b8"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (loginError) setLoginError(false);
              }}
            />
          </Animatable.View>

          <Animatable.View ref={senhaRef} style={{ width: "100%" }}>
            <TextInput
              style={[styles.input, loginError && styles.inputError]}
              placeholder="Senha"
              placeholderTextColor="#94a3b8"
              secureTextEntry
              value={senha}
              onChangeText={(text) => {
                setSenha(text);
                if (loginError) setLoginError(false);
              }}
            />
          </Animatable.View>

          {loginError && (
            <Text style={styles.errorText}>
              Credenciais inválidas.{" "}
              <Text style={styles.recover}>Recuperar senha</Text>
            </Text>
          )}

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
