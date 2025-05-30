import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { router } from 'expo-router';
import styles from '../styles/login';
import { useAuth } from '../contexts/AuthContext';

export default function RegisterScreen() {
  const [username, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const API_URL = 'http://192.168.15.23:8080' //provisório
  const { setUser } = useAuth();

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/cadastrar`, {
            username,
            email,
            senhaHash: password,
            tipo: 'usuario',
          });

      Alert.alert('Sucesso', 'Cadastro realizado!');
      setUser(response.data.usuario);
      router.replace('/menu');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro no cadastro');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.subtitle}>Crie sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={username}
          onChangeText={setNome}
        />
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
          value={password}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.guestLink}>Já tem conta? Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
