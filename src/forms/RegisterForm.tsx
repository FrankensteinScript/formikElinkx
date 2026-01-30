import { Formik, Form } from "formik";
import { Grid, Stack } from "@mui/material";
import { type RegisterFormValues } from "../types/RegisterFormValues";
import { registerInitialValues, registerSchema } from "../utils/schemas/registerSchema";
import { FormTextField } from "../components/form/FormTextField";
import { FormButton } from "../components/form/FormButton";
import { FormSelect } from "../components/form/FormSelect";
import { fields } from "../utils/consts";

export const RegisterForm = () => {
	const handleSubmit = async (values: RegisterFormValues) => {
		console.log(values);
	};

	return (
		<>
			<Formik initialValues={registerInitialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
				{({ resetForm }) => (
					<Form>
						<Grid container spacing={2}>
							{fields.map((field) => (
								<Grid key={field.name} size={field.grid}>
									{field.type === "select" && field.menuItem ? (
										<FormSelect name={field.name} label={field.label} menuItem={field.menuItem} />
									) : (
										<FormTextField
											name={field.name}
											label={field.label}
											placeholder={field.placeholder}
											type={field.type}
										/>
									)}
								</Grid>
							))}
						</Grid>

						<Grid container justifyContent="flex-end" sx={{ mt: 5 }}>
							<Stack direction="row" spacing={2}>
								<FormButton type="button" variant="contained" color="error" onClick={() => resetForm()}>
									Vymazat
								</FormButton>

								<FormButton type="submit" variant="contained">
									Odeslat
								</FormButton>
							</Stack>
						</Grid>
					</Form>
				)}
			</Formik>
		</>
	);
};
