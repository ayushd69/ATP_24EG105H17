
import { createContext, useState } from "react"

export const counterContextObj=createContext()

function ContextProvider({ children }) {
    const [counter,setCounter]=useState(10);
    const [counter2,setCounter2]=useState(20);
    //function to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    };  
    const changeCounter2=()=>{
      setCounter2(counter2+1)
    };
  return (
    <counterContextObj.Provider value={{counter,counter2,changeCounter,changeCounter2}}>
        {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider
