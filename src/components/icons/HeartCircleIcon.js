import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function HeartCircleIcon(props) {
    const { size } = props;

    return (
        <div className={`heart-circle fa-${size}`}>
            <FontAwesomeIcon size={size} icon={faHeart} mask={faCircle} transform='shrink-6.5 down-0.6'/>
        </div> 
    )
}