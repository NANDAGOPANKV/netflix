import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authContext/AuthContext";

export const NavBar = () => {
  const { user, logOut } = UserAuth();
  const NavigateTo = useNavigate();

  // logout user
  const handleLogOut = async () => {
    try {
      await logOut();
      NavigateTo("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[400] w-full absolute  ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold p-4 cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="border-2 border-red-600 px-2 py-2 mr-2 rounded sm:py-4 sm:px-4 text-white hover:bg-red-600    ">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-2 py-2 rounded sm:py-4 sm:px-4 text-white hover:bg-transparent hover:border-red-600 hover:border-2  hover:text-white "
          >
            Login Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="border-2 border-red-600 px-2 py-2 mr-2 rounded sm:py-4 sm:px-4 text-white hover:bg-red-600    ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-2 py-2 rounded sm:py-4 sm:px-4 text-white hover:bg-transparent hover:border-red-600 hover:border-2  hover:text-white ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
