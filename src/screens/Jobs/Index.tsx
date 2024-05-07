import React from 'react';
import { View } from 'react-native';
import ListJobs from './LIstJobs';
import Checkout from '../Checkout';

// Definindo uma interface se estiver usando TypeScript
interface User {
  name: string;
  email: string;
  type: 'basic' | 'pro';
}

// Componente funcional Jobs
export default function Jobs() {
  const user: User = {
    name: 'Thiago',
    email: 'thumbnail@thumbnail',
    type: 'pro',
  };

  // Renderização condicional baseada no tipo de usuário
  return user.type === 'basic' ? <Checkout /> : <ListJobs />;
}
