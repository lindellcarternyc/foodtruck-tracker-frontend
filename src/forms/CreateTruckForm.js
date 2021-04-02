import { Formik} from 'formik'

import { CREATE_TRUCK_SCHEMA } from './form-schema/truck.schema'

import Form from '../components/styled/Form'
import Button from '../components/styled/Button'
import FormFileInput from './components/FormFileInput'
import FormInput from './components/FormInput'
import Container from '../components/styled/Container'

const INITIAL_FORM_VALUES = {
  truckname: '',
  imageURL: '',
  imageUpload: null,
  cuisine: '',
}

const CreateTruckForm = (props) => {
  const { onSubmit, isLoading } = props
  return (
    <div>
      <Container>
      <h2>Create Truck</h2>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        onSubmit={onSubmit}
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
            <Form onSubmit={onSubmit}>
              <FormInput id="truckname" labelText="Truck name" />
              <FormInput id="cuisine" labelText="Cuisine" />
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
              <Button type='reset' onClick={resetForm}>Clear</Button>
              <Button type='submit' disabled={isSubmitDisabled}>Submit</Button>
            </Form>
          )
        }}
      </Formik>
      </Container>
    </div>
  )
}

export default CreateTruckForm