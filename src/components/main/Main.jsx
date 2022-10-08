import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import request, { IMAGEURL } from "../../config/request/Tmdb";

export const Main = () => {
  const [moives, setMoives] = useState([]);
  // pick random movie
  const randomMovies = moives[Math.floor(Math.random() * moives.length)];
  useLayoutEffect(() => {
    axios
      .get(request.popular)
      .then((res) => {
        setMoives(res.data.results);
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      })
      .finally(() => {
        console.log("Task Completed");
      });
  }, [setMoives]);

  const turnCatString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  return (
    <div className="w-full text-white h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-stone-800"></div>
        <img
          className="w-full h-[550px] sm:object-cover"
          src={
            `${IMAGEURL}${randomMovies?.backdrop_path}` ||
            `${IMAGEURL}${randomMovies?.poster_path}`
          }
          alt={randomMovies?.original_title || randomMovies?.title}
        />
      </div>
      <div className="absolute w-full top-[30%] p-4 md:p-8 ">
        <span className="text-3xl md:text-5xl font-bold">
          {randomMovies?.title || randomMovies?.original_title}
        </span>
        <div className="mt-4 mb-2">
          <button className="border bg-gray-300 text-black py-3 px-5 hover:bg-transparent from-gray-300  hover:text-white ">
            Play
          </button>
          <button className="border text-white border-gray-300 ml-3 py-3 px-3 hover:bg-gray-300 hover:text-black  ">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm cursor-pointer ">
          {randomMovies?.release_date
            ? `Relesed: ${randomMovies?.release_date}`
            : ""}
        </p>
        <p className=" text-base text-gray-300 w-full md:max-w-[80%] lg:max-w-[70%]   ">
          {/* {randomMovies?.overview} */}
          {turnCatString(randomMovies?.overview, 120)}
        </p>
      </div>
    </div>
  );
};
