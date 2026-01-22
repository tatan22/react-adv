//? importaciones necesarias de Formik
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

// import { MyTextInput } from "../components/MyTextInput";
// import { MySelect } from "../components/MySelect";
// import { MyCheckbox } from "../components/MyCheckbox";



export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Yup</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					setSubmitting(false);
				}}
				validationSchema={Yup.object({
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
					terms: Yup.boolean().oneOf([true], "Required"),
					jobType: Yup.string()
						.notOneOf(["other"], "Not a valid job type")
						.required("Required"),
				})}
			>
				{(formik) => (
					<Form noValidate>
						<MyTextInput label="First Name" name="firstName" type="text" />

						<MyTextInput label="Last Name" name="lastName" type="text" />

						<MyTextInput label="Email" name="email" type="email" />

						<MySelect label="Job Type" name="jobType">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-junior">IT Junior</option>
							<option value="it-senior">IT Senior</option>
							<option value="manager">Manager</option>
							<option value="other">Other</option>
						</MySelect>

						<MyCheckbox label="Terms and conditions" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
