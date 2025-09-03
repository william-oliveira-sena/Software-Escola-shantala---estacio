import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurmasCursosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Turmas e Cursos</Text>
      <Text style={styles.subtitle}>
        Aqui você poderá cadastrar, editar e gerenciar turmas e cursos da Escola Shantala.
      </Text>
      {/* Adicione sua lógica de exibição e formulários aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default TurmasCursosScreen;