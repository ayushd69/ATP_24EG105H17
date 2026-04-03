import {counterContextObj} from "./Context/ContextProvider.jsx"
import { useContext } from "react";
//import {Test} from "./Test.jsx";
import {} from '../store/CounterStore'
import { useCounterStore } from "./store/CounterStore.js";

function Home() {
  //call useCounterStore hook to get state of Zustand Store

  let  newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter);

  const {counter,changeCounter}= useContext(counterContextObj);
  console.log("home")
  return (
    <div>
      <h1  className="text-4xl">Counter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-200 p-5">Change</button>

            <h1  className="text-4xl">newCounter: {counter}</h1>
      <button onClick={changeCounter} className="bg-amber-200 p-5">incrementCounter</button>
    </div>
  )
}

export default Home