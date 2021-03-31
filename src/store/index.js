import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import userState from './features/user/user.slice'
import trucksState from './features/trucks/trucks.slice'

const store = configureStore({
  reducer: {
    userState,
    trucksState
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare().concat(logger)
})

export default store