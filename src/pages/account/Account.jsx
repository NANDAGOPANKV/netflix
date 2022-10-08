import React from "react";
import { FavoriteShows } from "../../components/favorite/FavoriteShows";

export const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/383fc36a-aa04-4dfd-95a0-a4b71bc21eed/IN-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] "></div>
        <div className="absolute top-[40%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-4xl font-bold">Favorits</h1>
        </div>
      </div>
      <FavoriteShows />
    </>
  );
};
