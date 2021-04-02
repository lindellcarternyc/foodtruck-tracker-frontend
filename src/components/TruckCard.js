import React from 'react';
import Button from './styled/Button'
import Container from './styled/Container'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function TruckCard(props) {
    const { truckname, cuisinetype, truckratings, currentLocation, truckid } = props.truck;

    const onClickFavorite = () => {
      props.onClickFavorite(truckid)
    }

    return (
        <div className='truck-card'>
            <img src='' alt=''/>
            <div className='truck-info'>
                <Container>
                <h5><Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, props.truck.truckid)}>{truckname}</Link></h5>
                <p>{cuisinetype}</p>
                <p>Avg. Rating: {truckratings.reduce((acc, rating) => (acc + rating), 0) / truckratings.length}</p>
                </Container>
            </div>
            <div className='location-info'>
                <Container>
                <p>Location: {currentLocation.location}</p>
                <p>departureTime: {currentLocation.departureTime}</p>
                </Container>
            </div>
            <div className='favorite-button'>
                <Button onClick={onClickFavorite}>{props.isFavoriteTruck ? 'Remove From' : 'Add To'} Favorites</Button>
            </div>
        </div>
    )
}