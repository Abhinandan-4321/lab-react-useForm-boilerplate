import { useState } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const [Submit, setSubmit] = useState(false)
  const onSubmit= (data) => {
    setSubmit(true)
  } 
  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {Submit ?<h2>Regsitration Successful!!</h2>:null}

        <input type="text" placeholder='Enter Your First Name' {...register("firstName",{required:"Enter First Name"})}/><br/>
        <p>{errors.firstName?.message}</p><br/>

        <input type="text" placeholder='Enter Your Last Name' {...register("lastName",{required:"Enter Last Name"})}/><br/>
        <p>{errors.lastName?.message}</p><br/>

        <input type="email" placeholder='Enter Your Email' {...register("email",{required:"Enter Email  ", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}/><br/>
        <p>{errors.email?.message}</p><br/>

        <input type="password" placeholder='Enter Your Password' {...register("password", {required:"Password is required",
        minLength:{value:4, message:"Password must be more than 4 characters"},
        maxLength:{value:20, message:"Password cannot be more than 20 characters"}})}/><br/>
        <p>{errors.password?.message}</p><br/>

        <button>Submit</button>
      </form>
    </>
  )
}

export default App
