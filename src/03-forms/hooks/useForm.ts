import { useState } from "react";

export const useForm = <T>(initialState: T) => {
	const [formData, setFormData] = useState(initialState);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// setRegisterData({
		//   ...registerData,
		//   [e.target.name]: e.target.value

		// })
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

  const resetForm = () => {
    // setFormData(initialState);
    setFormData({...initialState});
  }

  const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

	return {
    ...formData,
		//properties
		formData,
		//methods
		onChange,
    resetForm,
    isValidEmail
		
	};
};
