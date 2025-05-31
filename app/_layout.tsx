import { AuthProvider } from '../contexts/AuthContext';
import { Stack } from 'expo-router';

import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold,  } from '@expo-google-fonts/inter';
import { Poppins_600SemiBold,Poppins_700Bold} from '@expo-google-fonts/poppins';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}
      />
    </AuthProvider>
  );
}
