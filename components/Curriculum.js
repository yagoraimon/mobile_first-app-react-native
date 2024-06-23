import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Curriculum() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.resume}>
          <Text style={styles.title}>Experiência Profissional</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Product Designer Pleno</Text>
          <Text>Buzzmonitor - São Paulo, SP</Text>
          <Text>Maio 2024 - Presente</Text>
          <View style={{marginLeft: 16}}>
            <Text style={styles.bullet}>• Responsável pelo design de interfaces para aplicativos móveis e web, garantindo uma experiência de usuário coesa e agradável.</Text>
            <Text style={styles.bullet}>• Colaboração com desenvolvedores e gerentes de produto para criar soluções de design que atendam aos requisitos técnicos e de negócio.</Text>
            <Text style={styles.bullet}>• Condução de pesquisas de usuário e testes de usabilidade para coletar insights valiosos e melhorar as soluções de design.</Text>
            <Text style={styles.bullet}>• Criação de wireframes, mockups e protótipos interativos para comunicar ideias e iterar rapidamente com feedbacks.</Text>
          </View>
          
          <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 16,}}>Product Designer Junior</Text>
          <Text>Prepi - Recife, PE</Text>
          <Text>Março 2023 - Abril 2024</Text>
          <View style={{marginLeft: 16}}>
            <Text style={styles.bullet}>• Suporte na criação de interfaces de usuário para diversos projetos de clientes, desde startups até empresas estabelecidas.</Text>
            <Text style={styles.bullet}>• Assistência na realização de pesquisas de usuários e análise de dados para informar decisões de design.</Text>
            <Text style={styles.bullet}>• Desenvolvimento de componentes de design reutilizáveis e manutenção de guias de estilo.</Text>
            <Text style={styles.bullet}>• Participação em sessões de brainstorming e workshops de design para gerar ideias criativas e inovadoras.</Text>
          </View>
        </View>

        <View style={styles.resume}>
          <Text style={styles.title}></Text>
          <Text style={styles.title}>Habilidades</Text>
          <Text style={styles.bullet}>• Design de Interface de Usuário (UI)</Text>
          <Text style={styles.bullet}>• Experiência do Usuário (UX)</Text>
          <Text style={styles.bullet}>• Ferramentas de Design (Figma, Sketch, Adobe XD)</Text>
          <Text style={styles.bullet}>• Prototipagem Interativa</Text>
          <Text style={styles.bullet}>• Testes de Usabilidade</Text>
          <Text style={styles.bullet}>• Design Responsivo</Text>
          <Text style={styles.bullet}>• Pesquisa de Usuários</Text>
          <Text style={styles.bullet}>• Colaboração Multidisciplinar</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
    gap: 24,
    
  },
  resume: {
    alignItems: 'start',
    justifyContent: 'start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',

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
  bullet: {
    marginTop: 8,
  },
});
