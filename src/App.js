import { Link, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFound'
import CreateTruckPage from './pages/CreateTruckPage'

// Icon imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner)


console.log(process.env)

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to={ROUTES.HOME}>HOME</Link>{' '}
        <Link to={ROUTES.LOGIN}>LOGIN</Link>{' '}
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>{' '}
        <Link to={ROUTES.CREATE_TRUCK}>CREATE TRUCK</Link>
      </nav>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
        <Route exact path={ROUTES.CREATE_TRUCK} component={CreateTruckPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
