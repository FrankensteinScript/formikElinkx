import { Select, MenuItem, FormControl, FormHelperText, InputLabel, type SelectProps } from "@mui/material";
import { useField } from "formik";

type Props = SelectProps & {
	name: string;
	label: string;
	menuItem: string[];
};

export const FormSelect = ({ name, label, menuItem, ...props }: Props) => {
	const [field, meta, helpers] = useField(name);

	return (
		<FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
			<InputLabel shrink>{label}</InputLabel>
			<Select {...field} {...props} value={field.value || ""} onChange={(e) => helpers.setValue(e.target.value)}>
				{menuItem.map((item) => (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
			{meta.touched && meta.error && <FormHelperText>{meta.error}</FormHelperText>}
		</FormControl>
	);
};
