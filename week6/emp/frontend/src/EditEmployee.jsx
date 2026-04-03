// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation } from "react-router";

// function EditEmployee() {
//     const {state}=useLocation
  
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();

//       useEffect(()=>{
//         setValue("name",state.name);
//          setValue("email",state.email);
//           setValue("mobile",state.mobile);
//            setValue("designation",state.designation);
//             setValue("companyName",state.companyName);

//       },[]);

//       const saveModifiedEmp=async(saveModifiedEmp)=>{
        
//       }
    

      
//       //form submit
//       const onFormSubmit = async (newEmpObj) => {
//         try {
//           setLoading(true);
//           //make HTTP POST req
//           let res = await fetch("http://localhost:4000/emp-api/employees", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newEmpObj),
//           });
    
//           if (res.status === 201) {
//             //navigate to employees component programatically
//             navigate("/list");
//           } else {
//             let errorRes = await res.json();
//             console.log("error responce is ", errorRes);
//             throw new Error(errorRes.reason);
//           }
//         } catch (err) {
//           console.log("err in catch", err);
//           //deal with err
//           setError(err.message);
//         } finally {
//           setLoading(false);
//         }
//       };
    
//       console.log(error);
    
//       if (loading) {
//         return <p className="text-center text-4xl">Loading....</p>;
//       }
//       if (error) {
//         return <p className="text-red-500 text-center text-3xl">{error}</p>;
//       }
    
//       return (
//         <div className="border-2 rounded-3xl">
//           <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
//           {/* form */}
//           <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmi)}>
//             <input
//               type="text"
//               placeholder="Enter name "
//               {...register("name")}
//               className="mb-3  border-2 p-3 w-full rounded-2xl"
//             />
//             <input
//               type="email"
//               placeholder="Enter Email "
//               {...register("email")}
//               className="mb-3  border-2 p-3 w-full rounded-2xl"
//             />
    
//             <input
//               type="number"
//               placeholder="Enter mobile number"
//               {...register("mobile")}
//               className="mb-3  border-2 p-3 w-full rounded-2xl"
//             />
//             <input
//               type="text"
//               placeholder="Enter designation"
//               {...register("designation")}
//               className="mb-3  border-2 p-3 w-full rounded-2xl"
//             />
//             <input
//               type="text"
//               placeholder="Enter name of the company"
//               {...register("companyName")}
//               className="mb-3  border-2 p-3 w-full rounded-2xl"
//             />
    
//             <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
//               Add Emp
//             </button>
//           </form>
//         </div>
//       );
//     }
    
//     export default EditEmployee;
    
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router";
import axios from "axios"

function EditEmployee() {
  const { register,
    handleSubmit,
    setValue
  } = useForm();

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setValue("name", state.name );
    setValue("email", state.email );
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, []);
  
  const saveModifiedEmp=async(modifiedEmp)=>{
    console.log(modifiedEmp)
    //make http PUT req
    const res=await axios.put(`http://localhost:4000/emp-api/employees/${state._id}`, modifiedEmp)
    if(res.status===200){
      navigate("/list")
    }
  }


  return (
    <div>
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          disabled
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;