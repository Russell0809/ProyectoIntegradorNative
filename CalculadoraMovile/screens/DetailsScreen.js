import React from 'react';
import { View, StyleSheet, Linking, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

const CreditScreen = () => {

  const handleEmail = () => {
    const email = 'russell.dr72@gmail.com';
    const subject = encodeURIComponent('Felicidades Gustavo!');
    const body = encodeURIComponent('¡Ya vi tu proyecto!');
    const url = `mailto:${email}?subject=${subject}&body=${body}`;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        console.log(`No se pudo abrir el correo: ${url}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../images/contacto.jpg')}
      />
      <Text style={styles.title}>Gracias por usar mi App</Text>
      <Text style={styles.text}>
        Este increíble proyecto fue creado por Gustavo Rodriguez Garcia.
      </Text>
      <Button mode="contained" onPress={handleEmail}>
        Contacto
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    aspectRatio: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CreditScreen;
