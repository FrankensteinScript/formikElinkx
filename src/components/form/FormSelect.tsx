import { Select, MenuItem, FormControl, FormHelperText, InputLabel, type SelectProps, Typography } from "@mui/material";
import { useField } from "formik";

type Props = SelectProps & {
	name: string;
	label: string;
	menuItem: string[];
};

export const FormSelect = ({ name, label, menuItem, ...props }: Props) => {
	const [field, meta, helpers] = useField(name);

	return (
		<FormControl fullWidth sx={{ minWidth: 250 }} error={meta.touched && Boolean(meta.error)}>
			<InputLabel shrink>{label}</InputLabel>
			<Select
				{...field}
				{...props}
				value={field.value || ""}
				onChange={(e) => helpers.setValue(e.target.value)}
				displayEmpty={true}
				renderValue={(value) =>
					value?.length ? (
						Array.isArray(value) ? (
							value.join(", ")
						) : (
							value
						)
					) : (
						<Typography color="textDisabled">Vyberte...</Typography>
					)
				}
			>
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
