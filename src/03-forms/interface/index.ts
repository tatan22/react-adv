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

export interface FormikSelectProps extends Omit<FormikAbstractionProps, 'type'> {}

// export interface FormikSelectProps {
// 	label: string;
// 	name: string;
// 	placeholder?: string;
// 	[x: string]: any;
// }
