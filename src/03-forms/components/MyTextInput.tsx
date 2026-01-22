import { ErrorMessage, useField } from "formik";
import { FormikAbstractionProps } from "../interface";

export const MyTextInput = ({ label, ...props }: FormikAbstractionProps) => {
	
	const [field] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} type="text" />
			<ErrorMessage
				name={props.name}
				component="span"
				className="custom-span-error-class"
			/>
			
		</>
	);
};
