import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";


const Contact = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
          };
          console.log(userInfo)

        await axios.post("/contact/submit" , userInfo)
        .then((res) => {
        console.log(res.data)
        if(res.data) {
            toast.success('Message sent');
            navigate("/")
        }
        })
        .catch((err) => {
        if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
        } else {
            console.error("Error:", err.message);
            toast.error("Error: " + err.message);
        }
        });
    }

  return (
    <>
    <Navbar/>
    <div className='max-w-screen-2xl contain mx-auto md:px-20 px-4'><br/>
        <h1 className='text-3xl font-extrabold flex justify-center mt-32 md:mt-24 mb-7'>Contact Us</h1>
        <div className='flex flex-col items-center'>
            <form method='div' onSubmit={handleSubmit(onSubmit)}            
                className='flex flex-col shadow-lg w-80 md:w-3/6 p-12 mb-3 dark:bg-slate-800'>
                <label className= 'flex flex-col'>Name
                    <input 
                    type='name' 
                    className='w-64 md:w-auto p-2 mr-16 my-7 md:m-4 rounded-lg border dark:text-black' 
                    {...register("name", { required: true })}
                    placeholder='Enter your Name'/>

                </label>
                <label className= 'flex flex-col'>Email
                    <input 
                    type='email' 
                    className='w-64 md:w-auto p-2 mr-16 my-7 md:m-4 rounded-lg border dark:text-black' 
                    {...register("email", { required: true })}
                    placeholder='Enter your Email'/>

                </label>
                <label 
                className= 'flex flex-col'>Message
                    <textarea type='message' 
                    className='w-64 md:w-auto  md:p-10 my-7 mr-16 md:m-4 rounded-lg border dark:text-black' 
                    {...register("message", { required: true })}
                    placeholder='Enter your Message'/>
                </label>

                
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 mt-12 hover:bg-pink-700 duration-200"
                type='submit'

                >Submit</button>
            </form>            
        </div>
    </div>
    </>
  )
}

export default Contact
