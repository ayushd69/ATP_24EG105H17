import {create} from "zustand"

//create store
export const useCounterStore=create((set)=>({
 //state
  newCounter:500,
  newCounter1:100,
  //add user state(name,age,email)
  user:{name:"ayush",email:"ayush@gmail.com",age:21},
  //function change email
  changeEmail:()=>set({...user,email:"test@mail.com"}),
  //function to change name
  changeName:()=>set({...user,name:"ravi"}),
  //function to change age
  chnageAge:()=>set({...user,age:23}),
  //function to modify the state.
  incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
  incrementCounter:()=>set(state=>({newCounter1:state.newCounter1+1})),
  decrementCounter:()=>set(state=>({newCounter:state.newCounter-20})),
  reset:()=>set({newCounter:0})
  //function to change newCounter to 500
  //function to decrement newCounter1 by 20

}))