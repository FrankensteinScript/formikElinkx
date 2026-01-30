import { Button, type ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

type Props = ButtonProps & {
	type?: "button" | "submit" | "reset";
};

export const FormButton = ({ children, type = "button", ...props }: Props) => {
	const { isSubmitting, isValid } = useFormikContext();

	const disabled = type === "submit" ? isSubmitting || !isValid : false;

	return (
		<Button type={type} disabled={disabled} {...props}>
			{children}
		</Button>
	);
};
