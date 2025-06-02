import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import styles from '../styles/menu';
import { useAuth } from '../contexts/AuthContext';

export default function MenuScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <Text style={styles.sectionTitle}>Olá, {user?.username}!</Text>
      <TextInput
        placeholder="Encontre o seu próximo destino"
        placeholderTextColor="#a0a0a0"
        style={styles.searchInput}
      />

      {/* Shoppings */}
      <Text style={styles.sectionTitle}>Shoppings</Text>
      <View style={styles.card}>
        <Image
          source={require('../assets/shopping-iguatemi.jpg')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Shopping Iguatemi</Text>
      </View>

      {/* Mercados */}
      <Text style={styles.sectionTitle}>Mercados</Text>
      <View style={styles.card}>
        <Image
          source={require('../assets/zaffari-ipiranga.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Zaffari Ipiranga</Text>
      </View>

      {/* Farmácias */}
      <Text style={styles.sectionTitle}>Farmácias</Text>
      <View style={styles.card}>
        <Image
          source={require('../assets/panvel.jpg')}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Farmácias Panvel</Text>
      </View>
    </ScrollView>
  );
}
