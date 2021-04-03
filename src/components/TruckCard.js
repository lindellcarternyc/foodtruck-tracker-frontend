import React from 'react';
import Button from './styled/Button'
import Container from './styled/Container'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { currentUserSelector } from '../store/features/user/user.selectors'
import * as USER_ROLES from '../constants/user-roles'
import { useSelector } from 'react-redux'

export default function TruckCard(props) {
    const { truckname, cuisinetype, truckratings, currentLocation, truckid } = props.truck;
    const currentUser = useSelector(currentUserSelector)
    const onClickFavorite = () => {
      props.onClickFavorite(truckid)
    }

    if (currentUser.role === USER_ROLES.DINER) {
        return (
        <div className='truck-card'>
            <img src='' alt=''/>
            <div className='truck-info'>
                <Container>
                <h3><Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, props.truck.truckid)}>{truckname}</Link></h3>
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
                <Button onClick={onClickFavorite}>{props.isFavoriteTruck ? 'Unfavorite' : 'Favorite'}</Button>
            </div>
        </div>
    )
    } 
    return (
        <div className='truck-card'>
            <img src='' alt=''/>
            <div className='truck-info'>
                <Container>
                <h3><Link to={ROUTES.VIEW_TRUCK.replace(/:truckID/, props.truck.truckid)}>{truckname}</Link></h3>
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
        </div>
    )

}