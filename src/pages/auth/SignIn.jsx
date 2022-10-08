import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext/AuthContext";

export const SignIn = () => {
  const [emil, setEmil] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const NavigateTo = useNavigate();

  const { logIn } = UserAuth();

  
  // user sign in
  const handleSinIn = async (e) => {
    e.preventDefault();
    try {
      console.log("here login");
      await logIn(emil, password);
      NavigateTo("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full h-full object-cover absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/383fc36a-aa04-4dfd-95a0-a4b71bc21eed/IN-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed w-full h-screen top-0 left-0"></div>
        <div className=" fixed w-full px-4 py-24 z-10 ">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h2 className="text-3xl font-bold">Sign In</h2>
              {error ? <p className="p-3 my-2 bg-red-400 " >{error}</p> : null}
              <form onSubmit={handleSinIn} className="w-full flex flex-col ">
                <input
                  className="p-3 my-3 bg-gray-700 rounded "
                  type="email"
                  placeholder="Email"
                  autoComplete="Email"
                  value={emil}
                  onChange={(e) => {
                    setEmil(e.target.value);
                  }}
                />
                <input
                  className="p-3 my-3 bg-gray-700 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="Current-Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold ">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500 ">
                  <p>
                    <input className="m-2" type="checkbox" /> Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600 mr-1">New to Netflix?</span>
                  <Link to="/signup">Sing Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
