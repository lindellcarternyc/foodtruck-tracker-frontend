export const trucksSelector = (state) => {
  return state.trucksState.trucks
}

export const truckByIdSelector = (id) => (state) => {
  const truckId = parseInt(id)
  return trucksSelector(state).find(truck => truck.truckid === truckId)
}