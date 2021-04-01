import { Formik } from 'formik'

import FormSelect from '../../forms/components/FormSelect'
import Button from '../../components/styled/Button'
import Form from '../../components/styled/Form'


const DinerTruckPage = (props) => {
  const { truck } = props
  return (
    <div>
      <h2>Diner View Truck</h2>
      <p>{JSON.stringify(truck)}</p>
      <Button onClick={() => console.log('toggle favorite')}>Add Truck to Favorites</Button>
      <Formik
        initialValues={{
          rating: '1'
        }}
        onSubmit={() => {
          console.log('rate truck')
        }}
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