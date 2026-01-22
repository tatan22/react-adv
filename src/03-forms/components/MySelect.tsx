import { ErrorMessage, useField } from "formik";
import { FormikSelectProps } from "../interface";

export const MySelect = ({ label, ...props }: FormikSelectProps) => {
	const [field] = useField(props.name);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
