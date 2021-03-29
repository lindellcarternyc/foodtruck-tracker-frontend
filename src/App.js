import { Link, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFound'

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to={ROUTES.HOME}>HOME</Link>{' '}
        <Link to={ROUTES.LOGIN}>LOGIN</Link>{' '}
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>
      </nav>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
