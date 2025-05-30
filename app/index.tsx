import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/index';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-com-letreiro.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bem-vindo ao Inside Mapp</Text>
      <Text style={styles.subtitle}>O mapa que pensa em todos os passos</Text>

      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
