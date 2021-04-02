import { Formik} from 'formik'

// import { EDIT_TRUCK_SCHEMA } from './form-schema/truck.schema'

import Form from '../components/styled/Form'
import Button from '../components/styled/Button'
import Container from '../components/styled/Container'
import FormFileInput from './components/FormFileInput'
import FormInput from './components/FormInput'

export default function EditTruckForm(props){
    const { onSubmit, onCancel, truckToEdit: { imageUrl, imageUpload, cuisinetype: cuisine, truckname }, isLoading } = props
    return (
        <div>
          <Container>
            <h2>Edit Truck</h2>
            <Formik
                initialValues={{
                    imageUrl,
                    imageUpload,
                    cuisine,
                    truckname
                }}
                // validationSchema={EDIT_TRUCK_SCHEMA}
                onSubmit={onSubmit}
            >
            {({ setFieldValue, values, errors, isValid, touched, handleBlur }) => {
                const isFormValid = isValid 
                const onChangeImageUpload = (imageFile) => {
                  if (!imageFile) {
                    setFieldValue('imageUpload', null)
                    setFieldValue('imageURL', '')
                  } else {
                    setFieldValue('imageUpload', imageFile)
                    setFieldValue('imageURL', URL.createObjectURL(imageFile))
                  }
                }
              return(
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
                  <FormInput id="truckname" labelText="Truck name" />
                  <FormInput id="cuisine" labelText="Cuisine" />
                  <Button disabled={!isFormValid || isLoading} type="submit">Save Info</Button>
                  <Button disabled={isLoading} type="button" onClick={onCancel}>Cancel</Button>
                </Form>
              )
            }}
            </Formik>
            </Container>
        </div>
    )
}