import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/index';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao Inside Mapp!</Text>
      <Link href="/login" asChild>
        <Button title="Entrar" />
      </Link>
    </View>
  );
}