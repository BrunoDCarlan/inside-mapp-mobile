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
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
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
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'System',
    alignSelf: 'flex-start',
    marginTop: 0,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderColor: '#E2E8F0',
    borderWidth: 1,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#475569',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guestText: {
    marginTop: 12,
    color: '#64748B',
    textDecorationLine: 'underline',
  },
});

export default login;
