import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import user from './features/user/user.slice'

const store = configureStore({
  reducer: {
    user
  },
  middleware: (getDefaulMiddleWare) => getDefaulMiddleWare().concat(logger)
})

export default store