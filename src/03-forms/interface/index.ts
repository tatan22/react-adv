export interface FormaValues {
	firstName: string;
	lastName: string;
	email: string;
}

export interface FormikAbstractionProps {
	label: string;
	name: string;
	type?: "text" | "email" | "password";
	placeholder?: string;
	[x: string]: any;
}
export interface SelectOption {
	id: string;
	label: string;
}

export interface FormikSelectProps extends Omit<FormikAbstractionProps, 'type'> {
	option?: SelectOption[]
}


