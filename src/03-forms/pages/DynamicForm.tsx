import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import { SelectOption } from "../interface";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string()

  for (const validation of input.validations) {
    if (validation.type === "required") {
      schema = schema.required(validation.message);
    }
    if (validation.type === "minLength"){
      schema = schema.min((validation as any).value  || 1, validation.message)
    }
    if (validation.type === "email"){
      schema = schema.email( validation.message)
    }
  }
  requiredFields[input.name] = schema
}

const validationSchema = Yup.object(requiredFields)

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>
			<Formik
				initialValues={initialValues}
        validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => (
					<Form noValidate>
						{formJson.map(({name, type, label, placeholder, options}) => {
							if (
								type === "input" ||
								type === "password" ||
								type === "email"
							) {
								return (
									<MyTextInput
										key={name}
										type={type as any}
										name={name}
										label={label}
										placeholder={placeholder}
									/>
								);
							}else if (type === "select") {
                return (
                  <MySelect
                    key={name}
                    name={name}
                    label={label} option={[]}                  >
                    <option value="">Select an option</option>
                    {options?.map(({id, label}: SelectOption) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }else if (type === "checkbox") {
                return (
                  <MyCheckbox
                    key={name}
                    name={name}
                    label={label}
                  />
                );
              }

              throw new Error(`Type ${type} not supported`);

						})}
						<button type="submit">Enviar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
