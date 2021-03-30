import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Spinner(props) {
    // Reccomend size '3x'
    const { size } = props;

    return (
        <div className={`spinner fa-${size}`}>
            <FontAwesomeIcon icon={faSpinner} spin/>
        </div>
    )
}