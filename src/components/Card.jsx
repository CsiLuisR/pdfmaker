import { Fragment, useState, useContext } from 'react'
import {
	Card,
	Container,
	CardActions,
	CardContent,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core/'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardContent: {
		flexGrow: 1,
	},
	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}))

const CardObra = () => {
	const [state, setState] = useState(false)

	const HandleEvent = e => {
		setState(true)
		console.log(e)
	}

	const styleButton = {
		backgroundColor: 'blue',
	}

	const classes = useStyles()
	return (
		<Fragment>
			<main>
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant="h5" component="h2">
								Folio Obra: '125068'
							</Typography>
							<Typography gutterBottom variant="h6" component="h2">
								Folio Cotizac9ion: '54127'
							</Typography>
							<Typography>'obra prueba'</Typography>
						</CardContent>
						<CardActions>
							<input
								type="button"
								id="1"
								onClick={HandleEvent}
								value="Seleccionar"
								style={styleButton}
							></input>
						</CardActions>
					</Card>
				</Container>
			</main>
		</Fragment>
	)
}

export default CardObra
