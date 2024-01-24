import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex ">
      <div className="bg-login-img w-1/2 h-[100vh] bg-no-repeat bg-cover bg-bottom sm-max:hidden "></div>

      <div className="flex flex-col w-1/2 h-[100vh] justify-center items-center sm-max:w-full">
        <p className="font-semibold text-3xl">Welcome to DEMO..</p>
        <p className="max-w-[25rem] text-center">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
        <from className="flex flex-col gap-2 mt-5">
          <label>Email</label>
          <input
            type="email"
            className="px-[15px] py-[10px] border border-solid border-gray-300 w-[350px] rounded-md "
            required
            placeholder="Enter Your Email"
          />
          <label>Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" px-[15px] py-[10px] border border-solid border-gray-300 w-[350px] rounded-md "
              required
            />
            <div
              className=" absolute right-3 top-4 "
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
            </div>
          </div>

          <p className="text-end text-light">Forgot Password?</p>

          <button
            type="submit"
            className="bg-slate-600 text-white p-3 rounded-md  "
          >
            Login
          </button>
          <p className="text-center">OR</p>
          <button className="border border-solid border-gray-300 p-3 rounded-md flex justify-center items-center">
            <FcGoogle size={25} /> Sign Up With Google
          </button>
        </from>

        <p className="mt-10">
          Don't Have An account ? <Link to={"/SignUp"}>SignUp</Link>{" "}
        </p>

        {/* <input
        type={passwordVisible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? <RiEyeOffFill /> : <RiEyeFill />}
      </div> */}
      </div>
    </div>
  );
};

export default Login;
