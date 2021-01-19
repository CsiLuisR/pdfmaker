import { purple } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import { useState } from 'react'

const SwitchPurple = withStyles({
	switchBase: {
		color: '#3f50b5',
		'&$checked': {
			color: '#3f50b5',
		},
		'&$checked + $track': {
			backgroundColor: '#3f50b5',
		},
	},
	checked: {},
	track: {},
})(Switch)

const CustomSwitch = () => {
	const [searchType, setType] = useState('Buscar por Folio Obra')

	const handleChange = e => {
		if (e.target.checked === false) {
			setType('Buscar por Folio Obra')
		} else {
			setType('Buscar por Folio Cotizacion')
		}
	}

	return (
		<FormControlLabel
			control={<SwitchPurple onChange={handleChange}></SwitchPurple>}
			label={searchType}
		></FormControlLabel>
	)
}

export default CustomSwitch
