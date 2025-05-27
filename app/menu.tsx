import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import styles from '../styles/menu';

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <TextInput
        placeholder="Pesquisar local"
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
