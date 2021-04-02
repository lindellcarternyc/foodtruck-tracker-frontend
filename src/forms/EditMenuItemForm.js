import { Formik } from 'formik';
import FormInput from './components/FormInput'
import FormFileInput from './components/FormFileInput'
//import schema

import Form from '../components/styled/Form'
import Button from '../components/styled/Button'
import Container from '../components/styled/Container'

const INITIAL_FORM_VALUES = {
    itemName: '',
    itemDescription: '',
    imageURL: '',
    imageUpload: null,
    itemPrice: ''
}

export default function EditMenuItemForm(props) {
    const { onSubmit, onCancel, itemToEdit: { itemName, itemDescription, imageURL, imageUpload, itemPrice }, isLoading } = props
    return (
        <div>
            <Container>
            <h2>Edit Menu Item</h2>
            <Formik 
                // initialValues={{
                //   itemName,
                //   itemDescription,
                //   imageURL,
                //   imageUpload,
                //   itemPrice
                // }}
                initialValues={INITIAL_FORM_VALUES}
                // validationSchema={EDIT_USER_FORM_SCHEMA}
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
                    return (
                        <Form>
                            <FormInput 
                                id="itemName"
                                labelText="Name"
                            />
                
                            <FormInput 
                                id="itemDescription"
                                labelText="Description"
                            />
                            <FormFileInput 
                                id="imageUpload" 
                                labelText="Image upload" 
                                onChange={onChangeImageUpload} 
                                onBlur={handleBlur}
                                disabled={values.imageURL && !values.imageURL.startsWith('blob:')}
                            />
                            <FormInput id="imageURL" labelText="Image Url" disabled={!!values.imageUpload} />
                            <FormInput 
                                id="itemPrice"
                                labelText="Price"
                            />
                
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
