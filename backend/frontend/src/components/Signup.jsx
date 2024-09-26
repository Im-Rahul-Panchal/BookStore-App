import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";


function Signup() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    
    await axios.post("/user/signup" , userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data) {
        toast.success('Signup Successful!');
        navigate("/")
      }
      localStorage.setItem("Users" , JSON.stringify(res.data.user))
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Error:", err.message);
        toast.error("Error: " + err.message);       
        
      }
    })
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:  dark:bg-slate-900 dark:text-black">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter Your Name"
                  className="w-80 px-3 border rounded-md outline-none py-1"
                  {...register("name", { required: true })}
                />
                <br/>
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 border rounded-md outline-none py-1"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 border rounded-md outline-none py-1"
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              

              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <div className="text-md">
                  Have Account ?{" "}
                  <button
                    className="text-blue-500 cursor-pointer"             
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>{" "}
                  <Login/>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
