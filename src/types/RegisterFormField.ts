import type { TextFieldProps } from "@mui/material";
import type { RegisterFormValues } from "./RegisterFormValues";

export type RegisterFormField = {
	name: keyof RegisterFormValues;
	label: string;
	placeholder?: string;
	type?: TextFieldProps["type"];
	grid: {
		xs: number;
	};
	menuItem?: string[];
};
