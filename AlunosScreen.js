import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Button } from 'react-native';

// Este arquivo de serviço será onde você fará as chamadas ao seu back-end
// import { getAlunos } from './services/alunoService';

const AlunosScreen = ({ navigation }) => {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar os dados de alunos
  const fetchAlunos = async () => {
    try {
      // Simulação de dados de uma API ou Firebase
      const dadosDeExemplo = [
        { id: '1', nome: 'Ana Paula S.', curso: 'Massagem Relaxante' },
        { id: '2', nome: 'Carlos Eduardo M.', curso: 'Shiatsu' },
        { id: '3', nome: 'Mariana Lima', curso: 'Terapia Ayurvédica' },
      ];
      setAlunos(dadosDeExemplo);
    } catch (error) {
      console.error("Erro ao buscar alunos: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.curso}>{item.curso}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={alunos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      <Button
        title="Cadastrar Novo Aluno"
        onPress={() => Alert.alert('Navegar para a tela de cadastro')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
  },
  curso: {
    fontSize: 14,
    color: '#666',
  },
});

export default AlunosScreen;