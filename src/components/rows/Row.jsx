import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../Movie/Movie";
// icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Row = ({ title, URL, rowId }) => {
  const [movies, setMovies] = useState([]);
  useLayoutEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  }, [URL]);

  // slide to the left
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  // slide to the right
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex place-items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="f bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies?.map((data, index) => {
            return <Movie key={index} data={data} index={index} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" bg-white right-0  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
};
