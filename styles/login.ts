import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    flex: 1,
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 16,
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2F3E46',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#1e293b',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#f0f4f8',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderColor: '#cbd5e1',
    borderWidth: 1,
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    color: '#1e293b',
  },
  loginButton: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    width: '100%',
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  
  loginButtonEntrar: {
    backgroundColor: '#404a39',
  },
  
  loginButtonCadastrar: {
    backgroundColor: '#93b67b',
  },
  
  loginButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0.4,
  },
  guestLink: {
    marginTop: 12,
    color: '#64748B',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});

export default login;
