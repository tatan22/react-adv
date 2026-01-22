import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPages = () => {
	const { formData, onChange, resetForm, isValidEmail } = useForm({
		name: "tatan",
		email: "tatan@tatan.com",
		password1: "",
		password2: "",
	});

	const { name, email, password1, password2 } = formData;
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Registe Pages Tutorial</h1>
			<form onSubmit={onSubmit} noValidate>
				<input
					name="name"
					type="text"
					placeholder="Name"
					value={name}
					onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
				/>
        {name.trim().length <= 0 && <span className="error-message">Este campo es requerido</span>}
				<input
					name="email"
					type="email"
					placeholder="Email"
					value={email}
					onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
				/>
        {!isValidEmail(email) && <span className="error-message">El email no es valido</span>}
				<input
					name="password1"
					type="password"
					placeholder="Password"
					value={password1}
					onChange={onChange}
          className={`${(password1.trim().length <= 0 ) && "has-error"}`}
				/>
        <span>{password1.trim().length <= 0 && "Este campo es requerido"}</span>
        <span>{password1.trim().length < 6 && password1.trim().length > 0 && "Este campo debe tener al menos 6 caracteres"}</span>
				<input
					name="password2"
					type="password"
					placeholder="Confirm Password"
					value={password2}
					onChange={onChange}
          className={`${(password1.trim().length <= 0 ) && "has-error"}`}
				/>
        <span>{password2.trim().length <= 0 && "Este campo es requerido"}</span>
        <span>{password1.trim().length > 0 && password1 !== password2 && "Las contraseñas no son iguales"}</span>

				<button type="submit">Create account</button>
				<button type="reset" onClick={resetForm}>Reset</button>
			</form>
		</div>
	);
};
