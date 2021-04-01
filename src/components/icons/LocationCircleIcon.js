import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function LocationCircleIcon(props) {
    const { size } = props;

    return (
        <div className={`location-circle fa-${size}`}>
            <FontAwesomeIcon icon={faLocationArrow} mask={faCircle} transform='shrink-6.75 left-0.6 down-0.6'/>
        </div> 
    )
}