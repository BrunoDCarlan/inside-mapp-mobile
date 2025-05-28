import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from '../contexts/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </AuthProvider>
  );
}
