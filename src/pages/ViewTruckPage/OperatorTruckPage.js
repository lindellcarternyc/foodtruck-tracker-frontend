const OperatorTruckPage = (props) => {
  const { truck } = props
  return (
    <div>
      <h2>Operator View Truck</h2>
      <p>{JSON.stringify(truck)}</p>
    </div>
  )
}

export default OperatorTruckPage