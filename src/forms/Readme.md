# This folder contains all Form components. 

Forms should NOT make api calls or mutate state directly.
Instead all forms should take an `onSubmit` prop that accepts neccesary data for submission and a `isLoading` prop to determin if the action is currently taking place.