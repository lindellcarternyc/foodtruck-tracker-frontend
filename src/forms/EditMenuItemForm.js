import { Formik } from 'formik';
import FormInput from './components/FormInput'
import FormFileInput from './components/FormFileInput'
import { EDIT_MENU_ITEM_SCHEMA } from './form-schema/menu.schema'

import Form from '../components/styled/Form'
import Button from '../components/styled/Button'
import Container from '../components/styled/Container'

export default function EditMenuItemForm(props) {
    // Most of this should still come from props
    const { onSubmit, onCancel, itemToEdit: { itemName, itemDescription, imageURL, imageUpload, itemPrice }, isLoading } = props
    return (
        <div>
            <Container>
            <h2>Edit Menu Item</h2>
            <Formik 
                initialValues={{
                  itemName,
                  itemDescription,
                  imageURL,
                  imageUpload,
                  itemPrice
                }}
                validationSchema={EDIT_MENU_ITEM_SCHEMA}
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
