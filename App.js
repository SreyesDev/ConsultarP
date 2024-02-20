import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/Codes/Form';
import Low from './src/Codes/Low';
import colors from './src/Styles/colors';
import Resumen from './src/Codes/Resumen'

function App() {

  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMensage, setErrorMessage] = useState('');

  /*useEffect(() => {
    if(capital && interes && meses) calcular();
    else reset();
  },[capital, interes, meses]);*/

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }

  const calcular = () => {
    reset();
    if(!capital) {
      setErrorMessage('Añade la cantidad que deseas solicitar');
    }
    else if(!interes){
      setErrorMessage('Añade el interes')
    }
    else if(!meses) {
      setErrorMessage('Seleciona el tiempo a pagar')
    }
    else{
      const i = interes / 100;
      const c = capital / ((1 - Math.pow(i + 1, - meses)) / i);
      setTotal({
        pagoMensual: c.toFixed(2),
        pagara: (c + meses).toFixed(2) 
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={style.saArea}>
        <View style={style.background} />
        <Text style={style.tittleApp}>Consultar Interes de un Prestamo</Text>
        <Form 
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>
      <Resumen capital={capital} interes={interes} meses={meses} total={total} errorMensage={errorMensage} />
      <Low calcular={calcular}/>
    </>
  );
}

const style = StyleSheet.create({

  saArea: {
    height: 300,
    alignItems: 'center'
  },
  
  background: {
    backgroundColor: colors.Color_Principal,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position: 'absolute',
  },

  tittleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }

});
export default App;