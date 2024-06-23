import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />
      <Text style={styles.title}>Yago Raímon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
