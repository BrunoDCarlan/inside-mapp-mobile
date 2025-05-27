# Inside Mapp

Autor: Bruno Carlan

Aplicativo mobile desenvolvido com **React Native + Expo** para localização de ambientes internos como shoppings, mercados e farmácias. Backend em **Spring Boot** com autenticação de usuários.

## 🔧 Tecnologias utilizadas

### Frontend
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [expo-router](https://expo.github.io/router/docs)
- Axios para chamadas HTTP
- Estilização com `StyleSheet` (inline separada)

### Backend
- Spring Boot 3
- API REST com autenticação via JSON
- CORS configurado para acesso entre front e backend

---

## 📱 Funcionalidades desenvolvidas

### ✅ Telas em desenvolvimento:
- **Tela de Login** com autenticação via API
- **Tela de Cadastro** com envio de dados para o backend
- **Redirecionamento automático para a tela principal após login/cadastro**
- **Tela de Menu** com:
  - Campo de busca (ainda não funcional)
  - Seções separadas por categoria
  - Cards com imagem e nome do local

### ✅ Integração com backend:
- Requisições via Axios
- Rotas conectadas:
  - `POST /api/users/entrar` → login
  - `POST /api/users/cadastrar` → cadastro
- Senha enviada de forma crua (hash gerado no backend)
- CORS configurado para permitir acesso via Expo Web

---

## 🌐 Considerações para ambiente local

### Rodando backend:
Certifique-se de rodar o Spring Boot em:

http://localhost:8080

E permitir CORS adicionando a classe `CorsConfig`.

### Rodando frontend:
Use o IP da máquina local ao testar no celular via Expo Go:

```ts
// Exemplo em src/services/api.ts
baseURL: 'http://192.168.0.105:8080'