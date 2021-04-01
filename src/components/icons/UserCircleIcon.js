import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function UserCircleIcon(props) {
    const { size } = props;

    return (
        <div className={`user-circle fa-${size}`}>
            <FontAwesomeIcon icon={faUserCircle} />
        </div> 
    )
}