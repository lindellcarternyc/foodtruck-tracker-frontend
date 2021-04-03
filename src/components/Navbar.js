import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../store/features/user/user.selectors'
import * as USER_ROLES from '../constants/user-roles'

import UserCircleIcon from './icons/UserCircleIcon'
import TruckSearchIcon from './icons/TruckSearchIcon'
import HeartCircleIcon from './icons/HeartCircleIcon'
import Button from './styled/Button'

const NavWrapper = styled.div`
    height: ${props => props.theme.navBarHeight};
    border-bottom: ${props => props.theme.navBarBorderBottom};
    padding: ${props => props.theme.navBarSpace};
    margin-bottom: ${props => props.theme.space};
    size: ${props => props.theme.navIconSize};

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        display: none;
    }

    #logo, #user {
        width: 50px;
        height: auto;
        cursor: pointer;
    }

    div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center
    }
    
    #user {
        &:hover {
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
        }
        transition: all 0.5s ease-in-out;
    }

    @media (min-width: 600px) {
        h3 {
            display: initial;
            font-size: ${props => props.theme.navBarTitleFontSize};
            padding-top: 0.4rem;
            margin-left: ${props => props.theme.navBarSpace};
            cursor: pointer;
        }
    }
`

export default function NavBar(props) {
    const { maxWidth, className, userID } = props
    const currentUser = useSelector(currentUserSelector)
    const history = useHistory()

    const routeTo = (location) => {
        history.push(location)
    }

    if (!currentUser){
        return(
            <NavWrapper maxWidth={maxWidth} className={className}>
                <div id='nav-logo' onClick={() => routeTo('/')}>

                    <h3>Food Truck TrackR</h3>
                </div>
                <div id='nav-buttons'>
                    <Button
                        children='Log In'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/login')} 
                        />
                    <Button 
                        children='Sign Up'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/signup')}
                        />
                </div>
            </NavWrapper>
        )
    } else if (currentUser.role === USER_ROLES.DINER) {
        return (
            <NavWrapper maxWidth={maxWidth} className={className}>
                <div id='nav-logo' onClick={() => routeTo('/')}>

                    <h3>Food Truck TrackR</h3>
                </div>
                <div id='nav-buttons'>
                    {/* <Button 
                        children='Home'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/')}
                    /> */}
                    <Button 
                        children='Favorites'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/favorites')}
                    />
                    <Button
                        children='Search'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/trucks/:truckID')} 
                    />
                    <Button 
                        children='User'
                        variant='nav'
                        size='nav'
                        onClick={() => routeTo('/user')}
                    />
                </div>
            </NavWrapper>
        )
    }
    return (
        <NavWrapper maxWidth={maxWidth} className={className}>
        <div id='nav-logo' onClick={() => routeTo('/')}>

            <h3>Food Truck TrackR</h3>
        </div>
        <div id='nav-buttons'>
            {/* <Button 
                children='Home'
                variant='nav'
                size='nav'
                onClick={() => routeTo('/')}
            /> */}
            <Button 
                children='+ Truck'
                variant='nav'
                size='nav'
                onClick={() => routeTo('/trucks/new')}
            />
            <Button 
                children='User'
                variant='nav'
                size='nav'
                onClick={() => routeTo('/user')}
            />
        </div>
    </NavWrapper>
    )
}

