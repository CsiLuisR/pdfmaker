import axios from 'axios'

export const dataReq = async () => {
	const res = await axios.get(
		'https://apicotizacion.herokuapp.com/api/cotizaciones/40'
	)
	console.log(res)
	return res.data.Cotizaciones[0]
}
