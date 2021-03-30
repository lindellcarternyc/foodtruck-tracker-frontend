import { Formik, Form } from 'formik'

import { CREATE_TRUCK_SCHEMA } from './form-schema/truck.schema'
import FormFileInput from './components/FormFileInput'
import FormInput from './components/FormInput'

const INITIAL_FORM_VALUES = {
  imageURL: '',
  imageUpload: null,
  cuisine: '',
}

const CreateTruckForm = (props) => {
  const { submit, isLoading } = props
  return (
    <div>
      <h2>Create Truck</h2>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        onSubmit={submit}
        validationSchema={CREATE_TRUCK_SCHEMA}
      >
        {({ resetForm, setFieldValue, values, isSubmitting, isValid, touched, handleBlur }) => {
          const onChangeImageUpload = (imageFile) => {
            if (!imageFile) {
              setFieldValue('imageUpload', null)
              setFieldValue('imageURL', INITIAL_FORM_VALUES.imageURL)
            } else {
              setFieldValue('imageUpload', imageFile)
              setFieldValue('imageURL', URL.createObjectURL(imageFile))
            }
          }

          const isSubmitDisabled = isSubmitting || !isValid || isLoading || Object.keys(touched).length === 0

          return (
            <Form>
              <img src={values.imageURL} alt="upload preview"/>
              <p>Current image URL: {values.imageURL}</p>
              <FormFileInput 
                id="imageUpload" 
                labelText="Image upload" 
                onChange={onChangeImageUpload} 
                onBlur={handleBlur}
                disabled={values.imageURL && !values.imageURL.startsWith('blob:')}
              />
              <FormInput id="imageURL" labelText="Image Url" disabled={!!values.imageUpload} />
              <FormInput id="cuisine" labelText="Cuisine" />
              <button type='reset' onClick={resetForm}>Clear</button>
              <button type='submit' disabled={isSubmitDisabled}>Submit</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default CreateTruckForm