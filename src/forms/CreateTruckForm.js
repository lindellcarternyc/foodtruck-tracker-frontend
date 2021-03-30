import React, { useState } from 'react';
import * as yup from 'yup';

const defaultValues = {
    imageURL: '',
    imageUpload: null,
    cuisine: '',
}

const defaultErrors = {
    imageURL: '',
    cuisine: '',
}

const schema = yup.object().shape({
    imageURL: yup.string().trim().url()
        .required('Image upload or URL required'),
    cuisine: yup.string().trim()
        .required('Cuisine type is required')
        .min(4, `Must be more than 4 characters`)
        .max(20, 'Must be less than 20 characters')
})

export default function CreateTruckForm(props) {
    const { onSubmit, isLoading } = props;

    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState(defaultErrors);
    const [disableSubmit, setDisableSubmit] = useState(true);

    const handleChange = evt => {
        const { name, value, files } = evt.target;

        // If evt name is imageUpload, setValues to spread values, modifying imageUpload and imageURL:
        //     If files.length > 0, sets imageUpload to file object and imageURL to URL of file object
        //     If files.length = 0 (empty upload), set imageUpload and imageURL to default values
        // Otherwise does normal setValues
        if (name === 'imageUpload') {
            setValues({
                ...values,
                [name]: files.length 
                    ? files[0] 
                    : defaultValues[[name]],
                imageURL: files.length 
                    ? URL.createObjectURL(files[0]) 
                    : defaultValues.imageURL,
            })
        }
        else {
            setValues({
                ...values,
                [name]: value,
            })
        }

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
    
    return (
        <form onSubmit={onSubmit}>

            <img src={values.imageURL} alt='' />
            <p>current imageURL: {values.imageURL}</p>

            <label htmlFor='imageURL' >Image URL</label>
            <input
                type='url'
                name='imageURL'
                id='imageURL'
                value={values.imageUpload ? '' : values.imageURL}
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
                disabled={values.imageURL && !values.imageURL.startsWith('blob:')}
            />

            {errors.imageURL && <p>{errors.imageURL}</p>}

            <label htmlFor='cuisine' >Cuisine Type</label>
            <input
                type='text'
                name='cuisine'
                id='cuisine'
                value={values.cuisine}
                onChange={handleChange}
            />

            {errors.cuisine && <p>{errors.cuisine}</p>}

            <button type='reset' onClick={clearForm}>Clear</button>
            <button type='submit' >Submit</button>
        </form>
    )
}