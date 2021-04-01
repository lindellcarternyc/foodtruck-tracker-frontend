import React from 'react';
import Button from './styled/Button'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function TruckCard(props) {
    const { truckname, cuisinetype, truckratings, currentLocation } = props.truck;

    return (
        <div className='truck-card'>
            <img src='' alt=''/>
            <div className='truck-info'>
                <h5><Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, props.truck.truckid)}>{truckname}</Link></h5>
                <p>{cuisinetype}</p>
                <p>Avg. Rating: {truckratings.reduce((acc, rating) => (acc + rating), 0) / truckratings.length}</p>
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