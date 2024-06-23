import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.jpg')} style={styles.image} />
        <View style={styles.infos}>
          <Text style={styles.name}>Yago Raímon</Text>
          <Text style={styles.label}>Profissão:</Text>
          <Text>Product Designer Pleno</Text>

          <Text style={styles.title}>Informações de Contato</Text>
          <Text style={styles.label}>Email:</Text>
          <Text>yagoraimon@gmail.com</Text>
          <Text style={styles.label}>LinkedIn:</Text>
          <Text>linkedin.com/in/yagoraimon</Text>
        </View>
      </View>

      <View style={styles.resume}>
        <Text style={styles.title}>Resumo Profissional</Text>
        <Text>Product Designer com 3 anos de experiência em design de interfaces e experiência do usuário. Proficiente em traduzir necessidades de negócios e dos usuários em soluções visuais eficazes. Habilidade em trabalhar em equipes multifuncionais para desenvolver produtos digitais intuitivos e de alta qualidade.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
    height: 200,
  },
  infos: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    marginLeft: 16,
  },
  resume: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 40,
    marginBottom: 20,
  },
});
