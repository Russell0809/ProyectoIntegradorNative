// import { Switch, Text, TouchableOpacity, View } from 'react-native';
// import { Alert } from 'react-native';
// import React, {useState} from 'react';

// export default function Calculadora() {

//   const [darkTheme, setDarkTheme] = useState(false);
//   const [result, setResult] = useState(''); 

//   const colors = {
//     dark: '#22252D'
//     , dark1: '#292B36'
//     , dark2: '#272B33'
//     , ligth: '#FFF'
//     , ligth1: '#F1F1F1'
//     , ligth2: '#F7F7F7'
//   };

//   const calculate = (title) => {
//     const operators = ["+", "-", "*", "/", "%"];  // Lista de operadores
  
//     if(title == 'C') {
//       setResult('')
//     } else if(title == 'DL') {
//       setResult(result.substring(0, result.length - 1));
//     } else if(title == '=') {
//       // Comprueba si hay suficientes números para realizar la operación
//       const lastChar = result.slice(-1);
//       if(operators.includes(lastChar) || result.length < 3) {
//         Alert.alert("Error", "Ingresa dos dígitos para realizar la operación");
//       } else {
//         try {
//           const ans = Number(eval(result).toFixed(3)).toString();
//           setResult(ans);
//         } catch (e) {
//           Alert.alert("Error", "Ocurrió un error al realizar la operación");
//         }
//       }
//     } else {
//       // Comprueba si el último carácter en result y el nuevo carácter son operadores
//       if(operators.includes(title) && operators.includes(result.slice(-1))) {
//         return;
//       } else {
//         setResult(result + title);
//       }
//     }
//   }
  

//   const Btn = ({title , type}) => (
//     <TouchableOpacity 
//     onPress={() => calculate(title)}
//       style={{
//           padding: 0
//         , borderRadius: 10
//         , elevation: 1
//         , backgroundColor: getColor(colors.ligth1, colors.dark2)
//         , height: 50
//         , width: 70
//         , margin: 8
//       }}>
//       <Text 
//         style={{
//           fontSize: 37
//         , color: "black"
//         , textAlign: "center"
//         , textAlignVertical: "center"
//         , color: getBtnColor(type)
//       }}>{title}</Text>
//     </TouchableOpacity>
//   );
//   const getBtnColor = (type) => {
//     if(type == 'top'){
//       return '#35FBD6'
//     }else if(type == 'right'){
//       return '#EB6363'
//     }else{
//       return getColor(colors.dark, colors.ligth)
//     }
//   };  
//   const getColor = (ligth, dark) => darkTheme? dark : ligth;

//   return (
//     <View 
//       style={{ 
//           flex: 1
//         , width: '100%'
//         , paddingVertical: 20
//         , backgroundColor: getColor(colors.ligth, colors.dark)
//         , alignItems: "center"
//         , justifyContent: 'flex-end'
//       }}>
//       <Switch 
//         value={darkTheme} 
//         onValueChange={() => setDarkTheme(!darkTheme)}
//         thumbColor={getColor(colors.dark, colors.ligth)} 
//         trackColor={{ true: colors.ligth2, false: colors.dark2 }} 
//       />
//       <Text 
//         style={{ 
//           fontSize: 40
//           , color: getColor(colors.dark, colors.ligth)
//           , width: "100%"
//           , textAlign: "right"
//           , paddingRight: 20
//           , marginTop: 60
//           , paddingBottom: 20
//       }}>
//       {result}
//       </Text>
//       <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', backgroundColor: getColor(colors.ligth1, colors.dark1), borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
//         <Btn title="C" type="top"/>
//         <Btn title="DL" type="top"/>
//         <Btn title="/" type="top"/>
//         <Btn title="%" type="top"/>

//         <Btn title="7" type="number"/>
//         <Btn title="8" type="number"/>
//         <Btn title="9" type="number"/>
//         <Btn title="*" type="right"/>

//         <Btn title="4" type="number"/>
//         <Btn title="5" type="number"/>
//         <Btn title="6" type="number"/>
//         <Btn title="-" type="right"/>

//         <Btn title="1" type="number"/>
//         <Btn title="2" type="number"/>
//         <Btn title="3" type="number"/>
//         <Btn title="+" type="right"/>

//         <Btn title="00" type="number"/>
//         <Btn title="0" type="number"/>
//         <Btn title="." type="number"/>
//         <Btn title="=" type="right"/>
//       </View>
//     </View>
//   );
// }

import { Switch, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, {useState} from 'react';

export default function Calculadora() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState(''); 

  const colors = {
    dark: '#22252D'
    , dark1: '#292B36'
    , dark2: '#272B33'
    , ligth: '#FFF'
    , ligth1: '#F1F1F1'
    , ligth2: '#F7F7F7'
  };

  const calculate = (title) => {
    const operators = ["+", "-", "*", "/", "%"];  // Lista de operadores

    if(title == 'C') {
      setResult('')
    } else if(title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if(title == '=') {
      // Comprueba si hay suficientes números para realizar la operación
      const lastChar = result.slice(-1);
      if(operators.includes(lastChar) || result.length < 3) {
        Alert.alert("Error", "Ingresa dos dígitos para realizar la operación");
      } else {
        try {
          const ans = Number(eval(result).toFixed(3)).toString();
          setResult(ans);
        } catch (e) {
          Alert.alert("Error", "Ocurrió un error al realizar la operación");
        }
      }
    } else {
      // Comprueba si el último carácter en result y el nuevo carácter son operadores
      if(operators.includes(title) && operators.includes(result.slice(-1))) {
        return;
      } else {
        setResult(result + title);
      }
    }
  } 

  const Btn = ({title , type}) => (
    <TouchableOpacity 
    onPress={() => calculate(title)}
      style={{
          padding: 0
        , borderRadius: 10
        , elevation: 1
        , backgroundColor: getColor(colors.ligth1, colors.dark2)
        , height: 50
        , width: 70
        , margin: 8
      }}>
      <Text 
        style={{
          fontSize: 37
        , color: "black"
        , textAlign: "center"
        , textAlignVertical: "center"
        , color: getBtnColor(type)
      }}>{title}</Text>
    </TouchableOpacity>
  );
  const getBtnColor = (type) => {
    if(type == 'top'){
      return '#35FBD6'
    }else if(type == 'right'){
      return '#EB6363'
    }else{
      return getColor(colors.dark, colors.ligth)
    }
  };  
  const getColor = (ligth, dark) => darkTheme? dark : ligth;

  return (
    <View 
      style={{ 
          flex: 1
        , flexDirection: 'column'
        , justifyContent: 'space-between'
        , width: '100%'
        , backgroundColor: getColor(colors.ligth, colors.dark)
        , alignItems: "center"
      }}>
      <Switch 
        value={darkTheme} 
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.ligth)} 
        trackColor={{ true: colors.ligth2, false: colors.dark2 }} 
        style={{ marginTop: 20 }}
      />
      <Text 
        style={{ 
          fontSize: 40
          , color: getColor(colors.dark, colors.ligth)
          , width: "100%"
          , textAlign: "right"
          , paddingRight: 20
          , paddingBottom: 20
      }}>
      {result}
      </Text>
      <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', backgroundColor: getColor(colors.ligth1, colors.dark1), borderTopRightRadius: 20, borderTopLeftRadius: 20, marginBottom: 20}}>
        <Btn title="C" type="top"/>
        <Btn title="DL" type="top"/>
        <Btn title="/" type="top"/>
        <Btn title="%" type="top"/>

        <Btn title="7" type="number"/>
        <Btn title="8" type="number"/>
        <Btn title="9" type="number"/>
        <Btn title="*" type="right"/>

        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="-" type="right"/>

        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right"/>

        <Btn title="00" type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right"/>
      </View>
    </View>
  );
}
