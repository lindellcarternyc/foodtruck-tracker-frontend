import { Field } from 'formik'
import { InputWrapper } from '../../components/styled/Input'
import InputLabel from '../../components/styled/InputLabel'

const FormSelect = ({ id, labelText, options }) => {
  return (
    <Field name={id}>
      {({ field, meta }) => {
        const error = meta.touched && meta.error
        return (
          <InputWrapper error={error}>
            <InputLabel 
              labelText={labelText}
              name={id}
            />
            <select {...field} name={id} id={id}>
              {options.map((o) => {
                return <option key={o.value} value={o.value}>{o.label}</option>
              })}
            </select>
          </InputWrapper>
        )
      }}
    </Field>
  )
}

export default FormSelect