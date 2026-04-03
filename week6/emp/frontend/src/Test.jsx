import {counterContextObj} from "./Context/ContextProvider.jsx"
import { useContext } from "react"
import { useCounterStore } from "../store/CounterStore.js";

function Test() {
    console.log("Test")
     const {counter2,changeCounter2}= useContext(counterContextObj);
 
  return (
    <div>
      <h1  className="text-4xl">Counter2: {counter2}</h1>
      <button onClick={changeCounter2} className="bg-amber-200 p-5">Change</button>
    </div>
  )
}

export default Test
