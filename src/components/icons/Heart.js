import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';

export default function Heart(props) {
    const { isFavorite, size } = props;

    return (
        isFavorite 
            ?   <div className={`heart fa-layers fa-${size}`}>
                    <FontAwesomeIcon icon={solidHeart} color='red' transform='shrink-1'/>
                    <FontAwesomeIcon icon={outlineHeart} />
                </div> 
            :   <div className={`heart fa-${size}`}>
                    <FontAwesomeIcon icon={outlineHeart} />
                </div>
    )
}