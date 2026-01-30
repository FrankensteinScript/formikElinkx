import { Grid, Paper, Typography } from "@mui/material";
import { RegisterForm } from "./forms/RegisterForm";

function App() {
	return (
		<Grid container direction="column" alignContent={"center"} justifyContent={"center"} p={4}>
			<Typography variant="h4" mb={3}>
				Registrace
			</Typography>

			<Grid>
				<Paper elevation={3} sx={{ p: 4, maxWidth: 1000 }}>
					<Typography variant="h6" mb={2}>
						Registrační formulář
					</Typography>

					<RegisterForm />
				</Paper>
			</Grid>
		</Grid>
	);
}

export default App;
