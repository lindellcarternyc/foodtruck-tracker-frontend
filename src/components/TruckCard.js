import React from 'react';

export default function TruckCard(props) {
    const { truckname, cuisinetype, truckratings, currentLocation } = props.truck;

    return (
        <div className='truck-card'>
            <img src='' alt=''/>
            <div className='truck-info'>
                <h5>{truckname}</h5>
                <p>{cuisinetype}</p>
                <p>Avg. Rating: {truckratings.reduce((acc, rating) => (acc + rating)) / truckratings.length}</p>
            </div>
            <div className='location-info'>
                <p>Location: {currentLocation.location}</p>
                <p>departureTime: {currentLocation.departureTime}</p>
            </div>
            <div className='favorite-button'>
                <Button onClick={() => console.log('toggle favorite')}>Add Truck to Favorites</Button>
            </div>
        </div>
    )
}