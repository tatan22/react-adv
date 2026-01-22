//? importaciones necesarias de Formik
import {FormikErrors, useFormik} from 'formik'
import '../styles/styles.css'
import { FormaValues } from '../interface'
export const FormikBasicPage = () => {
  // Uso de validate y validateSchema

  const validate = ( {firstName, lastName, email}: FormaValues ) => {
    const errors: FormikErrors<FormaValues> = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }else if (firstName.length >= 15) {
      errors.firstName = 'First name must be 15 characters or less';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }else if (lastName.length >= 10) {
      errors.lastName = 'Last name must be 10 characters or less';
    }
    if (!email.trim()) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

    return errors
  }

  const {values, handleChange, handleSubmit, errors, touched, handleBlur} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'tatan@tatan.com'
    },
    onSubmit: values => {
      console.log(values)
    },
    validate

  })


  return (
    <div>
      <h1>Formik Basic</h1>
      <form onSubmit={handleSubmit} noValidate >
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text"
          name="firstName" 
          onBlur={handleBlur}
          onChange={handleChange} 
          value={values.firstName} 
          className={`${touched.firstName && errors.firstName && "has-error"}`} />
        {touched.firstName && errors.firstName && <span> {errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          name="lastName"
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={values.lastName}
          className={`${touched.lastName && errors.lastName && "has-error"}`}
        />
        {touched.lastName && errors.lastName && <span> {errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          onBlur={handleBlur} 
          onChange={handleChange} 
          value={values.email}
          className={`${touched.email && errors.email && "has-error"}`} 
        />
        {touched.email && errors.email && <span> {errors.email}</span>}

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}