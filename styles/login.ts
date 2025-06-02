import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefed5',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  containerLogin: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  formWelcomeContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 220,
    height: 220,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: '#3d4d3a',
    textAlign: 'center',
    marginBottom: 8,
  },  
  subtitle: {
    fontFamily: 'Poppins_700Bold', // fonte arredondada e robusta
    fontSize: 20,
    color: '#3d4d3a', // verde escuro da paleta
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#e5d3b3', // fundo claro pastel para inputs
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderColor: '#3d4d3a', // borda forte da paleta
    borderWidth: 2,
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
    color: '#3d4d3a',
  },
  loginButton: {
    fontFamily: 'Inter_600SemiBold',
    width: '100%',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  loginButtonEntrar: {
    backgroundColor: '#6f8a69', // botão principal verde escuro
  },
  loginButtonCadastrar: {
    backgroundColor: '#3d4d3a', // tom intermediário da paleta
  },
  loginButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#fcfcfc', // texto claro em botões escuros
    letterSpacing: 0.4,
  },
  guestLink: {
    marginTop: 16,
    color: '#3d4d3a',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  inputError: {
    borderColor: '#ff4d4d',
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 13,
    alignSelf: 'flex-start',
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
  },
  recover: {
    textDecorationLine: 'underline',
  },

});

export default login;
