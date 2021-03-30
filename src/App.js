import { Link, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFound'
import CreateTruckPage from './pages/CreateTruckPage'
import FavoritesPage from './pages/FavoritesPage'
import TruckPage from './pages/TruckPage'
import EditTruckPage from './pages/EditTruckPage'
import MenuItemPage from './pages/MenuItemPage'
import CreateMenutItemPage from './pages/CreateMenuItemPage'
import EditMenuItemPage from './pages/EditMenuItemPage'
import UserInfoPage from './pages/UserInfoPage'
import EditUserInfoPage from './pages/EditUserInfoPage'

const App = () => {
  // console.log(Object.keys(ROUTES))
  return (
    <div className="App">
      <nav>
        {/* <Link to={ROUTES.HOME}>HOME</Link>{' '}
        <Link to={ROUTES.LOGIN}>LOGIN</Link>{' '}
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>{' '}
        <Link to={ROUTES.CREATE_TRUCK}>CREATE TRUCK</Link> */}
        {Object.keys(ROUTES).map(path => {
          return <span key={path}><Link to={ROUTES[path]}>{path}</Link> </span>
        })}
      </nav>
      <Switch>
        {/* BASE ROUTES */}
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
        <Route exact path={ROUTES.DINER_FAVORITES} component={FavoritesPage}/>
        
        {/* OPERATOR ROUTES */}
        <Route path={ROUTES.EDIT_MENU_ITEM} component={EditMenuItemPage} />
        <Route path={ROUTES.CREATE_MENU_ITEM} component={CreateMenutItemPage} />
        <Route path={ROUTES.VIEW_MENU_ITEM} component={MenuItemPage} />

        <Route exact path={ROUTES.CREATE_TRUCK} component={CreateTruckPage}/>
        <Route path={ROUTES.VIEW_TRUCK} component={TruckPage} />
        <Route path={ROUTES.EDIT_TRUCK} component={EditTruckPage} />

        <Route exact path={ROUTES.USER_INFO} component={UserInfoPage} />
        <Route path={ROUTES.EDIT_USER} component={EditUserInfoPage} />

        {/* MENU ROUTES */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
