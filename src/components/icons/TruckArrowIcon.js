import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function TruckArrowIcon(props) {
    const { size } = props;

    return (
        <div className={`truck-arrow fa-${size}`}>
            <FontAwesomeIcon icon={faLocationArrow} mask={faTruck} transform='shrink-8 up-2 left-3.75'/>
        </div> 
    )
}