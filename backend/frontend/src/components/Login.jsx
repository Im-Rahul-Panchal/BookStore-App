import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    
    await axios.post("/user/login" , userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data) {
        toast.success('Login Successful!');
        document.getElementById('my_modal_3').close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users" , JSON.stringify(res.data.user))          
        }, 500);
      }
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
        setTimeout(() => {  }, 2000);        

      } else {
        console.error("Error:", err.message);
        toast.error("Error: " + err.message);  
        setTimeout(() => {  }, 2000);        

      }
    })
  };

  return (
    <>
      <div className="dark:  dark:bg-slate-50 dark:text-black">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Login</h3>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>
              ✕
            </button>

            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your email"
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

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p>
                  Not Registered?
                  <Link to="/Signup" className="text-blue-500 underline cursor-pointer">
                    {"  "}Signup!
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
