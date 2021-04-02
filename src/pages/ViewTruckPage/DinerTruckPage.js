import { Formik } from 'formik'

import FormSelect from '../../forms/components/FormSelect'
import Button from '../../components/styled/Button'
import Form from '../../components/styled/Form'
import Container from '../../components/styled/Container'
import { useDispatch } from 'react-redux'
import { rateTruck } from '../../store/features/trucks/trucks.thunks'
import { favoriteATruck } from '../../store/features/user/user.thunks'



const DinerTruckPage = (props) => {
  const { truck, currentUser } = props
  const dispatch = useDispatch()

  const onRateTruck = (data) => {
    dispatch(rateTruck(data))
  }

  const favoriteTruck = () => {
    const trucks = [
      ...currentUser.trucks,
      { truck: { truckid: truck.truckid } }
    ]
    dispatch(favoriteATruck({ userid: currentUser.id, trucks }))
  }

  return (
    <div>
      <Container>
      <h2>Diner View Truck</h2>
      <p>{JSON.stringify(truck)}</p>
      <Formik
        initialValues={{
          rating: '1'
        }}
        onSubmit={onRateTruck}
      >
        <Form>
        <FormSelect
          id="rating"
          labelText="Rating"
          options={[
            { value: '1', label: '1'},
            { value: '2', label: '2'},
            { value: '3', label: '3'},
            { value: '4', label: '4'},
            { value: '5', label: '5'},
          ]}
        />
        <Button onClick={favoriteTruck}>Add Truck to Favorites</Button>
        </Form>
      </Formik>
      </Container>
    </div>
  )
}

export default DinerTruckPage