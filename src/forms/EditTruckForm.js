import { Formik} from 'formik'

// import { EDIT_TRUCK_SCHEMA } from './form-schema/truck.schema'

import Form from '../components/styled/Form'
import Button from '../components/styled/Button'
import FormFileInput from './components/FormFileInput'
import FormInput from './components/FormInput'

export default function EditTruckForm(props){
    const { onSubmit, onCancel, truckToEdit: { imageUrl, imageUpload, cuisine }, isLoading } = props
    return (
        <div>
            <h2>Edit Truck</h2>
            <Formik
                initialValues={{
                    imageUrl,
                    imageUpload,
                    cuisine
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
                console.group('Edit User Form Logs')
                  console.log('isValid', isValid)
                  console.log('touched', touched)
                  console.log('errors', errors)
                console.groupEnd()
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
                <FormInput id="cuisine" labelText="Cuisine" />
                <Button disabled={!isFormValid || isLoading} type="submit">Save Info</Button>
                <Button disabled={isLoading} type="button" onClick={onCancel}>Cancel</Button>
              </Form>
            )
            }}
            </Formik>
        </div>
    )
}