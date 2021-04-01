const DinerTruckPage = (props) => {
  const { truck } = props
  return (
    <div>
      <h2>Diner View Truck</h2>
      <p>{JSON.stringify(truck)}</p>
    </div>
  )
}

export default DinerTruckPage