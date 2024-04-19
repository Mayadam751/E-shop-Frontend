import { useFormik } from 'formik'
import React from 'react'
import { Alert } from "flowbite-react";
import axios from 'axios';
import { Link } from 'react-router-dom';


async function registerNewUser(results){
    try {

       const {result} = await axios.post("http://localhost:5000/user", results)
       console.log(result.response);  
       
  } catch (error) {
    console.log("error",error.response);
    }}
export default function Register() {
  const myFormik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: ""
    },
    onSubmit: registerNewUser,
    validate: function (Values) {
      const errors = {};
      if (Values.name.length < 4 || Values.name.length > 10) {
        errors.name = "Name mst be from 4 to 10 characters"
      }
      if (Values.email.includes("@") === false || Values.email.includes(".") === false) {
        errors.email = "Invalid email"
      }
      if (Values.password.length < 6 || Values.password.length > 12) {
        errors.password = "Password mst be from 6 to 12 characters"
      }
      console.log(errors);
      return errors
    }
  })

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form onSubmit={myFormik.handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  {myFormik.errors.email && myFormik.touched.name? <Alert color="failure" >
                    <span className="font-medium"> {myFormik.errors.email}</span>
                  </Alert> : ""}
                </div>
                <div>
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                  <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.name} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required="" />
                  {myFormik.errors.name &&  myFormik.touched.name?  <Alert color="failure" >
                    <span className="font-medium"> {myFormik.errors.name}</span>
                  </Alert> : ""}
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onBlur={myFormik.handleBlur} onChange={myFormik.handleChange} value={myFormik.values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  {myFormik.errors.password && myFormik.touched.name? <Alert color="failure" >
                    <span className="font-medium"> {myFormik.errors.password}</span>
                  </Alert> : ""}
                </div>

                <div className="flex items-start">
                 
                </div>
                <button disabled={myFormik.isValid===false || myFormik.dirty===false} type="submit" className="border border-slate-700 w-full text-gray-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
