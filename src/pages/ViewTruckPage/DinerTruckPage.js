
import FormSelect from '../../forms/components/FormSelect'
import Button from '../../components/styled/Button'



const DinerTruckPage = (props) => {
  const { truck } = props
  return (
    <div>
      <h2>Diner View Truck</h2>
      <p>{JSON.stringify(truck)}</p>
      <Button type="submit">Add Truck to Favorites</Button>
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
    </div>
  )
}

export default DinerTruckPage