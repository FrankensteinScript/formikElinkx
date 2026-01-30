import type { RegisterFormField } from "../../types/RegisterFormField";

export const Region = ["Praha", "Brno", "Ostrava"] as const;
export type RegionType = (typeof Region)[number];

export const fields: RegisterFormField[] = [
	{ name: "firstName", label: "Jméno", placeholder: "Vaše jméno", type: "text", grid: { xs: 6 } },
	{ name: "lastName", label: "Příjmení", placeholder: "Vaše příjmení", type: "text", grid: { xs: 6 } },
	{
		name: "nickName",
		label: "Uživatelské jméno",
		placeholder: "Vaše uživatelské jméno",
		type: "text",
		grid: { xs: 6 },
	},
	{ name: "email", label: "Email", placeholder: "Váš e-mail", type: "email", grid: { xs: 6 } },
	{
		name: "region",
		label: "Kraj",
		placeholder: "Vyberte...",
		type: "select",
		grid: { xs: 6 },
		menuItem: [...Region],
	},
];
