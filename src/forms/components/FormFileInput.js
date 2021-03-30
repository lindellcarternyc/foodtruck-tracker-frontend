import { ErrorMessage } from 'formik'

const FormFileInput = ({ id, labelText, onChange, onBlur, disabled, value  }) => {
  const handleChange = (evt) => {

    onChange(evt.currentTarget.files[0])
  }

  return (
    <div>
      <label htmlFor={id}>{labelText}: </label>
      <input id={id} name={id} onChange={handleChange} type="file" onBlur={onBlur} disabled={disabled} value={value}/>
      <ErrorMessage name={id} component="div" />
    </div>
  )
}

export default FormFileInput