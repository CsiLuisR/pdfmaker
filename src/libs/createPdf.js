import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { createDd } from './docdefinition'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export const createPDF = () => {
	const dd = {
		folio: '153498',
	}
	return pdfMake.createPdf(dd).open()
}
