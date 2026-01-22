import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPages = () => {

	return (
		<div>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "Min 2 characters")
						.max(15, "Max 15 characters")
						.required("Required"),
					email: Yup.string()
						.email("Invalid email address")
						.matches(
							/\.[a-zA-Z]{2,}$/,
							"Email must have an extension (.com, .net, etc)",
						)
						.required("Required"),
					password1: Yup.string()
						.min(6, "Min 6 characters")
						.required("Required"),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Passwords must match")
						.required("Required"),
				})}
			>
				{
					// (formik) => (
					({ errors, touched, handleReset }) => (
						<Form>
							<h1>Registe Pages Tutorial</h1>
							<MyTextInput
								label="Nombre"
								name="name"
								placeholder="Tu Nombre"
							/>
							<MyTextInput
								label="Email"
								name="email"
								type="email"
								placeholder="correo@correo.com"
							/>
							<MyTextInput
								label="Password"
								name="password1"
								type="password"
								placeholder="******"
							/>
							<MyTextInput
								label="Confirmar Password"
								name="password2"
								type="password"
								placeholder="******"
							/>
							<button type="submit">Create account</button>
							<button type="reset"  onClick={handleReset} >
								Reset
							</button>
						</Form>
					)
				}
			</Formik>
		</div>
	);
};
