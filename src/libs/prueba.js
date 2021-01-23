const _ = require('lodash')

const dd = {
	folio: '12345',
	fecha: '21-03-2001',
	obra: 'aguas calientes',
	usuario: 'luis y constructores S.A. de C.V.',
	creador: 'Dorian Mendoza',
	email: 'luis.ramirez@csiciber.com',
	contacto: '8712633867',
	vigencia: '23-02-2012',
	sostenimiento: '3 dias',
	condiciones: 'lo que sea',
	moneda: 'MXN',
	materiales: [
		{
			folioitem: '12873',
			categoria: 'cemento',
			subcategoria: 'cemento pvc',
			producto: 'cemento para pvc sanitario lata de 400',
			unidad: 'pza',
			requerido: '3',
			anotaciones: 'todo bien',
			preciounitarios: '890',
		},
		{
			folioitem: '12893',
			categoria: 'tuberia',
			subcategoria: 'tuberia pvc',
			producto: 'tuveria de pvc para agua',
			unidad: 'mts',
			requerido: '10',
			anotaciones: 'todo chido',
			preciounitarios: '15',
		},
		{
			folioitem: '871278',
			categoria: 'sillas',
			subcategoria: 'sillas de mesa',
			producto: 'silla de mesa para exteriores',
			unidad: 'pza',
			requerido: '80',
			anotaciones: 'se vende por separado',
			preciounitarios: '120',
		},
	],
}

const getKey = dd => {
	const ddKeys = _.keysIn(dd)
	return ddKeys
}

console.log(getKey(dd.materiales[0]))
