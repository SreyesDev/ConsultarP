import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import colors from "../Styles/colors";

function Form(props) {
  
  const {setCapital, setInteres, setMeses} = props;

  return (
    <View style={style.viewForm}>
      <View style={style.ViewInput}>
        <TextInput
          style={style.input}
          placeholder="Cantidada" 
          keyboardType="numeric"
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />

        <TextInput 
          placeholder="Interes %"
          keyboardType="numeric"
          style={[style.input, style.inputPorciento]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>

      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setMeses(value)}
        placeholder={{label: 'Selecciona el plazo', value: null }}
        items = { [
          {label: '2 meses', value: 2},
          {label: '4 meses', value: 4},
          {label: '6 meses', value: 6},
          {label: '8 meses', value: 8},
          {label: '10 meses', value: 10},
          {label: '12 meses', value: 12}
        ]}
      />
    </View>
  )
}

const style = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.Color_Principal_Oscuro,
    borderRadius: 30,
    height:180,
    justifyContent: 'center',
  },

  ViewInput: {
    flexDirection: 'row',
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.Color_Principal,
    borderRadius: 5,
    width: '55%',
    marginRight: 5,
    marginLeft:-5,
    color: '#000',
    paddingHorizontal: 20,
  },

  inputPorciento: {
    width: '45%',
    marginLeft: 5,
  }

})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },

  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginTop: 5,
  }
})
export default Form;