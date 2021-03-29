import { configureStore } from '@reduxjs/toolkit'

import user from './features/user/user.slice'

const store = configureStore({
  reducer: {
    user
  }
})

export default store