// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwG5DcJn1ehdbKtOItWKfGREwyUlfgkGo",
  authDomain: "expoauth-a0395.firebaseapp.com",
  projectId: "expoauth-a0395",
  storageBucket: "expoauth-a0395.appspot.com",
  messagingSenderId: "279436728108",
  appId: "1:279436728108:web:7118509447d18be7b17e89"
};
// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Obter instância de autenticação
const auth = getAuth(app);

export { auth };
