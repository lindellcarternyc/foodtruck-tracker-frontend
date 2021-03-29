import React, { useState } from 'react';

const defaultValues = {
    imageURL: '',
    imageUpload: null,
    cuisine: '',
}

// Still needs validation

export default function CreateTruckForm(props) {
    const { onSubmit, isLoading } = props;

    const [formValues, setFormValues] = useState(defaultValues);

    const handleChange = evt => {
        const getValue = target => {
            switch(target.name) {
                case 'imageUpload':
                    return target.files[0];
                default:
                    return target.value;
            }
        }
        setFormValues({
            ...formValues,
            [evt.target.name]: getValue(evt.target),
        })
    }

    const clearForm = () => {
        setFormValues(defaultValues);
    }
    
    return (
        <form onSubmit={onSubmit}>

            <label htmlFor='imageURL' >Image URL</label>
            <input
                type='url'
                name='imageURL'
                id='imageURL'
                value={formValues.imageURL}
                onChange={handleChange}
                disabled={!!formValues.imageUpload}
            />

            <p>OR</p>

            <label htmlFor='imageUpload' >Upload Image</label>
            <input
                type='file'
                name='imageUpload'
                id='imageUpload'
                accept='image/*'
                onChange={handleChange}
                disabled={!!formValues.imageURL}
            />

            <label htmlFor='cuisine' >Cuisine Type</label>
            <input
                type='text'
                name='cuisine'
                id='cuisine'
                value={formValues.cuisine}
                onChange={handleChange}
            />

            <button type='reset' onClick={clearForm}>Clear</button>
            <button type='submit' >Submit</button>
        </form>
    )
}