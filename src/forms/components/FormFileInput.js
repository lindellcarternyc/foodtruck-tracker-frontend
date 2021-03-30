import { ErrorMessage } from 'formik'

const FormFileInput = ({ id, labelText, onChange, disabled, onBlur }) => {
  const handleChange = (evt) => {

    onChange(evt.currentTarget.files[0])
  }

  return (
    <div>
      <label htmlFor={id}>{labelText}: </label>
      <input 
        id={id} 
        name={id} 
        onChange={handleChange} 
        onBlur={onBlur}
        type="file"
        disabled={disabled} 
      />
      <ErrorMessage name={id} component="div" />
    </div>
  )
}

export default FormFileInput