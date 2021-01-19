import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
import { image64 } from '../images/logo'

const images = `data:image/png;base64,${image64}`

export const createDd = data => {
	const { folio, fecha, obra, usuario, creador, email, contacto, vigencia, sostenimiento, condiciones, moneda } = data

	const dd = {
		content: [
			{
				image: images,
				width: 100,
			},
			{
				text: '\n\n',
			},
			{
				text: [
					{
						text: 'Cotizacion Node.:  ',
						style: 'titles',
					},
					{
						text: folio,
					},
					{
						text: '\n'
					},
					{
						text: 'fecha:  ',
						style: 'titles'
					},
					{
						text: fecha
					},
					{
						text: '\n'
					},
					{
						text: 'Obra:  ',
						style: 'titles'
					},
					{
						text: obra,
					},
					{
						text: '\n'
					},
					{
						text: 'Empresa que elaboro la propuesta:  ',
						style: 'titles'
					},
					{
						text: usuario,
					},
					{
						text: '\n'
					},
					{
						text: 'Elaboro:  ',
						style: 'titles'
					},
					{
						text: creador,
					},
					{
						text: '\n'
					},
					{
						text: 'correo:  ',
						style: 'titles'
					},
					{
						text: email
					},
					{
						text: '\n'
					},
					{
						text: 'Numero de contacto:  ',
						style: 'titles'
					},
					{
						text: contacto
					},
					{
						text: '\n'
					},
					{
						text: 'Fecha de vigencia de la propuesta:  ',
						style: 'titles'
					},
					{
						text: vigencia
					},
					{
						text: '\n'
					},
					{
						text: 'Días de sostenimiento de oferta:  ',
						style: 'titles'
					},
					{
						text: sostenimiento
					},
					{
						text: '\n'
					},
					{
						text: 'Condiciones comerciales:  ',
						style: 'titles'
					},
					{
						text: condiciones
					},
					{
						text: '\n'
					},
					{
						text: 'Moneda:  ',
						style: 'titles'
					},
					{
						text: moneda
					},
					{
						text: '\n'
					}
				],
			},
		],
		styles: {
			titles: {
				bold: true,
			},
		},
	}

	return dd
}
