import React, { useState } from 'react';
import * as yup from 'yup';

const defaultValues = {
    imageURL: '',
    imageUpload: null,
    cuisine: '',
}

const defaultErrors = {
    image: '',
    cuisine: '',
}

// UNTESTED SCHEMA --- tried to get it to require either url OR upload

// const schema = yup.object().shape({
//     imageURL: yup.string().trim().url()
//         .when('imageUpload', {
//             is: (imageUpload) => !imageUpload,
//             then: yup.string().trim().url().required('Image upload or URL required'),
//             otherwise: yup.string()
//         }),
//     imageUpload: yup.mixed()
//         .when('imageURL', {
//             is: (imageURL) => !imageURL || imageURL.length === 0,
//             then: yup.mixed().required('Image upload or URL required'),
//             otherwise: yup.mixed()
//         }),
//     cuisine: yup.string()
//         .trim()
//         .required('Cuisine type is required')
//         .min(4, `Must be more than 4 characters`)
//         .max(20, `Must be more than 4 characters`),
// }, [['imageURL', 'imageUpload']]);



export default function CreateTruckForm(props) {
    const { onSubmit, isLoading } = props;

    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState(defaultErrors);
    const [disableSubmit, setDisableSubmit] = useState(true);

    const handleChange = evt => {
      console.log(evt.target)
        // const { name, value, files } = evt.target;

        const getValue = target => {
            switch(target.name) {
                case 'imageUpload':
                    return target.files[0];
                default:
                    return target.value;
            }
        }
        setValues({
            ...values,
            [evt.target.name]: getValue(evt.target),
        })

        // yup.reach(schema, name)
        //     .validate(value)
        //     .then(_ => {
        //         setErrors({
        //             ...errors,
        //             [name]: '',
        //         })
        //     })
        //     .catch(err => {
        //         setErrors({
        //             ...errors,
        //             [name]: err.errors[0]
        //         })
        //         setDisableSubmit(true)
        //     })
    }

    const clearForm = () => {
        setValues(defaultValues);
    }
    
    console.log(values)
    return (
      
        <form onSubmit={onSubmit}>

            <label htmlFor='imageURL' >Image URL</label>
            <input
                type='url'
                name='imageURL'
                id='imageURL'
                value={values.imageURL}
                onChange={handleChange}
                disabled={!!values.imageUpload}
            />

            <p>OR</p>

            <label htmlFor='imageUpload' >Upload Image</label>
            <input
                type='file'
                name='imageUpload'
                id='imageUpload'
                accept='image/*'
                onChange={handleChange}
                disabled={!!values.imageURL}
            />

            {errors.image && <p>errors.image</p>}

            <label htmlFor='cuisine' >Cuisine Type</label>
            <input
                type='text'
                name='cuisine'
                id='cuisine'
                value={values.cuisine}
                onChange={handleChange}
            />

            {errors.cuisine && <p>errors.cuisine</p>}

            <button type='reset' onClick={clearForm}>Clear</button>
            <button type='submit' >Submit</button>
        </form>
    )
}