import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../images/tecmilenio.png')} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>BIENVENIDO</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Calculadora')}
        >
          <Text style={styles.buttonText}>CALCULADORA</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Creditos')}
        >
          <Text style={styles.buttonText}>CREDITOS</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text: {
    color: 'black', 
    textShadowColor: 'white', 
    textShadowRadius: 10
  },
  button: {
    backgroundColor: '#1e90ff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    width: 200,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default HomeScreen;
