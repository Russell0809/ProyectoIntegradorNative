import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Calculadora from './screens/Calculadora';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
        <Stack.Screen name="Creditos" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
