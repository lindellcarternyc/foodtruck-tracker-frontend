import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Spinner() {
    return (
        <div className='spinner'>
            <FontAwesomeIcon icon="spinner" spin size='3x'/>
        </div>
    )
}