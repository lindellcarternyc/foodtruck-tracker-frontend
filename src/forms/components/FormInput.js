import { Field } from 'formik'
import Input from '../../components/styled/Input'

const FormInput = ({ id, labelText, type, disabled }) => {
  return (
      <Field 
        name={id}
      >
        {({ field, meta }) => {
          return (
            <Input
              type={type}
              disabled={disabled}
              labelText={labelText} 
              {...field} 
              error={meta.touched && meta.error}
            />
          )
        }}
      </Field>
  )
}

export default FormInput