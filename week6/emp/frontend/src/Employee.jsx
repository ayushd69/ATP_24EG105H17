import { useLocation } from "react-router"

function Employee() {
  const {state}=useLocation();
  return (
    <div className='p-16 text-center text-3xl'>
        <h1 className="text-5xl text-amber-300">Employee Details</h1>
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
    </div>
  )
}

export default Employee