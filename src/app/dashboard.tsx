import { View, Text, StyleSheet } from "react-native";
import { Button } from "@/components/button"
import { router } from "expo-router"


export default function Dashboard() {
  return (
    <View style ={styles.container}>
      <Text style ={styles.title}>Dashboard</Text>
      <Button title="Voltar" onPress={() => router.back()}/>
    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 32,
        gap: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    }
})