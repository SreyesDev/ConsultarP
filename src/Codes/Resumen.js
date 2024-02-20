import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function DataResult(props) {
	const {title, value} = props;

	return(
	<View style={style.value}>
		<Text>{title}</Text>
		<Text>{value}</Text>
	</View>
	)
};

function Resumen(props) {
	const {capital, interes, meses, total, errorMensage} = props;

  return(
		<View style={style.viewError}>
			{total && (
				<View style={style.boxResult} >
					<Text style={style.title}>Resumen</Text>
					<DataResult title='Cantidad solicitada:' value={`${capital} pesos`} />
					<DataResult title='Interes %:' value={`${interes} %`} />
					<DataResult title='Plazo:' value={`${meses} meses`} />
					<DataResult title='Pago Mensual:' value={`${total.pagoMensual} pesos`} />
					<DataResult title='Total a pagar:' value={`${total.pagara} pesos`} />
				</View>
			)}
			
			<View>
				<Text style={style.error}>{errorMensage}</Text>
			</View>

		</View>
	)
}

const style = StyleSheet.create({
	error: {
		textAlign: 'center',
		color: '#f00',
		fontWeight: 'bold',
		fontSize: 20,
	},

	viewError:{
		marginHorizontal: 40,
	},

	boxResult: {
		padding: 30,
	},

	title:{
		textAlign: 'center',
		color: 'black',
		fontWeight: 'bold',
		marginBottom: 30,
	},

	value:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	}
})
export default Resumen;