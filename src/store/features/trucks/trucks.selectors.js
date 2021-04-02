export const trucksSelector = (state) => {
  return state.trucksState.trucks
}

export const truckByIdSelector = (id) => (state) => {
  const truckId = parseInt(id)
  return trucksSelector(state).find(truck => truck.truckid === truckId)
}

export const menuItemSelector = ({ truckID, menuItemID }) => (state) => {
  console.log('menuItemSelctor', state.trucks)
}