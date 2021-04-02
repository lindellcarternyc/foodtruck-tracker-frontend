export const currentUserSelector = (state) => {
  return state.userState.user
}

export const isUserStateLoadingSelector = (state) => state.userState.isLoading

export const isFavoriteTruckSelector = state => (truckid) => {
  const currentUser = currentUserSelector(state)
  if (!currentUser) return false

  const currentUserTrucks = currentUser.trucks
  for (const truckObj of currentUserTrucks) {
     return truckObj.truck.truckid == truckid
  }
  return false
}