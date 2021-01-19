import { image64 } from '../images/logo'

const images = `data:image/png;base64,${image64}`

export const createDd = data => {
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
						text: '168435',
					},
				],
			},
		],
		styles: {
			titles: {
				fontSize: 14,
				bold: true,
			},
		},
	}

	return dd
}
