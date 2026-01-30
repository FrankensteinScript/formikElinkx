import { TextField, type TextFieldProps } from "@mui/material";
import { useField } from "formik";

type Props = TextFieldProps & {
	name: string;
};

export const FormTextField = ({ name, ...props }: Props) => {
	const [field, meta] = useField(name);

	return (
		<TextField
			{...field}
			{...props}
			fullWidth
			slotProps={{
				inputLabel: {
					shrink: true,
				},
			}}
			error={meta.touched && Boolean(meta.error)}
			helperText={meta.touched && meta.error}
		/>
	);
};
