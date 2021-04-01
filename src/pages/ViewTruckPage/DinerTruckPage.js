import { Formik } from 'formik'

import FormSelect from '../../forms/components/FormSelect'
import Button from '../../components/styled/Button'
import Form from '../../components/styled/Form'
import { useDispatch } from 'react-redux'
import { rateTruck } from '../../store/features/trucks/trucks.thunks'


const DinerTruckPage = (props) => {
  const { truck } = props
  const dispatch = useDispatch()

  const onRateTruck = (data) => {
    dispatch(rateTruck(data))
  }

  return (
    <div>
      <h2>Diner View Truck</h2>
      <p>{JSON.stringify(truck)}</p>
      <Button onClick={() => console.log('toggle favorite')}>Add Truck to Favorites</Button>
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
        <Button type="submit">Add Truck to Favorites</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default DinerTruckPage