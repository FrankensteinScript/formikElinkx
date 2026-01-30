import type { RegisterFormValues } from "../../types/RegisterFormValues";
import * as Yup from "yup";

export const registerInitialValues: RegisterFormValues = {
	firstName: "",
	lastName: "",
	nickName: "",
	email: "",
	region: "",
};

export const registerSchema = Yup.object({
	firstName: Yup.string().optional(),

	lastName: Yup.string().optional(),

	nickName: Yup.string().min(4, "Min. 4 znaky").required("Uživatelské jméno je povinné"),

	email: Yup.string().email("Špatný formát emailu").required("Email je povinný"),

	region: Yup.string().oneOf(["Praha", "Brno", "Ostrava"], "Vyberte platný kraj").optional(),
});
