import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function TruckSearchIcon(props) {
    const { size } = props;

    return (
        <div className={`truck-search fa-${size}`}>
            <FontAwesomeIcon icon={faSearch} mask={faTruck} transform='shrink-8 up-1.75 left-3.5'/>
        </div> 
    )
}