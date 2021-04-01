export const currentUserSelector = (state) => {
  return state.userState.user
}

export const isUserStateLoadingSelector = (state) => state.userState.isLoading