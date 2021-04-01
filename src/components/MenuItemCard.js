import React from 'react';

export default function MenuItemCard(props) {
    const { itemName, itemPhotos, itemPrice, customerRatingAvg } = props.menu;

    return (
        <div className='menu-item-card'>
            <img src={itemPhotos[0]} alt={itemName}/>
            <div className='item-info'>
                <h5>{itemName}</h5>
                <p>${itemPrice.toFixed(2)}</p>
                <p>Rating: {customerRatingAvg.toFixed(1)}</p>
            </div>
        </div>
    )
}