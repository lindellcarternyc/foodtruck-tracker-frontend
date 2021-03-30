import { Formik, Form } from 'formik'
import FormFileInput from './components/FormFileInput'
import FormInput from './components/FormInput'

const INITIAL_CREATE_TRUCK_FORM_VALUES = {
  imageUpload: null,
  imageUrl: '',
  cuisine: ''
}

const CreateTruckForm = () => {
  return (
    <div>
      <h2>Create Truck</h2>
      <Formik
        initialValues={INITIAL_CREATE_TRUCK_FORM_VALUES}
      >
        {({ setFieldValue, values }) => {
          console.log(values)
          return (
            <Form>
              <FormFileInput id="imageUpload" labelText="Image upload" onChange={file => setFieldValue('imageUpload', file)} disabled={!!values.imageUrl}/>
              <FormInput id="imageUrl" labelText="Image url" disabled={values.imageUpload !== null}/>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default CreateTruckForm