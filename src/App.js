import { Link, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as ROUTES from './constants/routes'
import * as USER_ROLES from './constants/user-roles'

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFound'
import CreateTruckPage from './pages/CreateTruckPage'
import FavoritesPage from './pages/FavoritesPage'
import TruckPage from './pages/TruckPage'
import EditTruckPage from './pages/EditTruckPage'
import MenuItemPage from './pages/MenuItemPage'
import CreateMenuItemPage from './pages/CreateMenuItemPage'
import EditMenuItemPage from './pages/EditMenuItemPage'
import UserInfoPage from './pages/UserInfoPage'
import EditUserPage from './pages/EditUserPage'

import PrivateRoute from './components/PrivateRoute'
import { setUser } from './store/features/user'
import { fetchCurrentUser } from './api-client'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchCurrentUser()
      .then(user => {
        dispatch(setUser(user))
      })
      .catch(err => {
        console.log('app:mount:err', err)
      })
  }, [dispatch])
  return (
    <div className="App">
      <nav>
        {Object.keys(ROUTES).map(path => {
          return <span key={path}><Link to={ROUTES[path]}>{path}</Link> </span>
        })}
      </nav>
      <Switch>
        {/* BASE ROUTES */}
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.SIGNUP} component={SignupPage} />

        <PrivateRoute roles={[USER_ROLES.DINER]} exact path={ROUTES.DINER_FAVORITES} component={FavoritesPage}/>
        
        <PrivateRoute 
          roles={[USER_ROLES.OPERATOR]} 
          path={ROUTES.EDIT_MENU_ITEM} 
          component={EditMenuItemPage} 
        />
        <PrivateRoute 
          roles={[USER_ROLES.OPERATOR]}
          path={ROUTES.CREATE_MENU_ITEM} 
          component={CreateMenuItemPage} 
        />
        <PrivateRoute path={ROUTES.VIEW_MENU_ITEM} component={MenuItemPage} />

        <PrivateRoute roles={[USER_ROLES.OPERATOR]} path={ROUTES.EDIT_TRUCK} component={EditTruckPage} />
        <PrivateRoute roles={[USER_ROLES.OPERATOR]} exact path={ROUTES.CREATE_TRUCK} component={CreateTruckPage}/>
        <PrivateRoute roles={[USER_ROLES.OPERATOR]} path={ROUTES.VIEW_TRUCK} component={TruckPage} />
        
        <PrivateRoute exact path={ROUTES.USER_INFO} component={UserInfoPage} />
        <PrivateRoute path={ROUTES.EDIT_USER} component={EditUserPage} />

        {/* MENU ROUTES */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App
