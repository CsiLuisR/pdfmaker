import { Button } from '@material-ui/core'
import { createPDF } from '../libs/createPdf'

const ButtonPdf = () => {
	return (
		<Button variant="contained" onClick={createPDF}>
			LLamar API
		</Button>
	)
}

export default ButtonPdf
