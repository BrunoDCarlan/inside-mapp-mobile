import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  username: string;
  email: string;
  tipo: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUserState(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Erro ao carregar usuário do storage", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const setUser = async (user: User) => {
    try {
      setUserState(user);
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Erro ao salvar usuário no storage", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Erro ao remover usuário do storage", error);
    } finally {
      setUserState(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
