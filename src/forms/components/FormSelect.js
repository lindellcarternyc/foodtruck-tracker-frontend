import { Field, ErrorMessage } from 'formik'

const FormSelect = ({ id, labelText, options }) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}: </label>
      <Field as="select" name={id}>
        {options.map(({ value, label }) => {
          return <option key={value} value={value}>{label}</option>
        })}
      </Field>
      <ErrorMessage name={id} component="div" />
    </div>
  )
}

export default FormSelect