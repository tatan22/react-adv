//? importaciones necesarias de Formik
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
	const { handleSubmit, errors, touched, getFieldProps } = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "tatan@tatan.com",
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Must be 15 characters or less")
				.required("Required"),
			lastName: Yup.string()
				.max(10, "Must be 10 characters or less")
				.required("Required"),
			email: Yup.string()
				.required("Required")
				.email("Invalid email address")
				.matches(
					/\.[a-zA-Z]{2,}$/,
					"Email must have an extension (.com, .net, etc)",
				),
		}),
	});

	return (
		<div>
			<h1>Formik Yup</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					// name="firstName" || Este estaría implícito en el getFieldProps
					className={`${touched.firstName && errors.firstName && "has-error"}`}
					{...getFieldProps("firstName")}
				/>
				{touched.firstName && errors.firstName && (
					<span> {errors.firstName}</span>
				)}

				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					{...getFieldProps("lastName")}
					className={`${touched.lastName && errors.lastName && "has-error"}`}
				/>
				{touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

				<label htmlFor="email">Email</label>
				<input
					type="email"
					{...getFieldProps("email")}
					className={`${touched.email && errors.email && "has-error"}`}
				/>
				{touched.email && errors.email && <span> {errors.email}</span>}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
