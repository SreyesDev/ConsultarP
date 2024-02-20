import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../Styles/colors";

function Low (props) {

  const {calcular} = props;
  return(
    <View style={style.viewLow}>
    <TouchableOpacity style={style.button} onPress={calcular}>
      <Text style={style.text}>Calcular</Text>
    </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  viewLow: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.Color_Principal,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  button: {
    alignItems: 'center',
  },

});

export default Low;