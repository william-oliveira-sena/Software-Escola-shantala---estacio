import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe as telas que você irá criar
import LoginScreen from './LoginScreen.js';
import HomeScreen from './HomeScreen.js';
import AlunosScreen from './AlunosScreen.js';
import TurmasCursosScreen from './TurmasCursosScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Alunos" component={AlunosScreen} options={{ title: 'Gerenciar Alunos' }} />
        <Stack.Screen name="TurmasCursos" component={TurmasCursosScreen} options={{ title: 'Gerenciar Turmas e Cursos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}