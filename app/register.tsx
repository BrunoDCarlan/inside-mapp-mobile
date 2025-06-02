import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { router } from 'expo-router';
import styles from '../styles/login';
import { useAuth } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
  const [username, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const API_URL = 'http://192.168.15.23:8080'; // provisório
  const { setUser } = useAuth();

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/cadastrar`, {
        username,
        email,
        senhaHash: password,
        tipo: 'usuario',
      });

      const { token } = response.data;
      await AsyncStorage.setItem("authToken", token);
      setUser({ ...response.data.usuario, token });

      Alert.alert('Sucesso', 'Cadastro realizado!');

      router.replace('/menu');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro no cadastro');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Crie sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#94a3b8"
          value={username}
          onChangeText={setNome}
        />
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
          value={password}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={[styles.loginButton, styles.loginButtonCadastrar]} onPress={handleRegister} activeOpacity={0.8}>
          <Text style={styles.loginButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/login')} activeOpacity={0.7}>
          <Text style={styles.guestLink}>Já tem conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
