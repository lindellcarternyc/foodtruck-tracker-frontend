import { Field, ErrorMessage } from 'formik'

const FormInput = ({ id, labelText, type }) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}: </label>
      <Field 
        name={id}
        id={id}
        type={type}
      />
      <ErrorMessage 
        name={id}
        component="div"
      />
    </div>
  )
}

export default FormInput