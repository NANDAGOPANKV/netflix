import React, { useLayoutEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IMAGEURL300 } from "../../config/request/Tmdb";
import { db } from "../../config/firebase/Firebase";
import { UserAuth } from "../../context/authContext/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

export const FavoriteShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  // slide to the left
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  // slide to the right
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //  move Reference
  const moveRef = doc(db, "users", `${user?.email}`);

  // deleting the doc
  const deleteDoc = async (passId) => {
    try {
      const result = movies.filter((items) => items.id !== passId);
      await updateDoc(moveRef, {
        favoriteContect: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.favoriteContect);
    });
  }, [user?.email]);
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">My Show</h1>
      <div className="relative flex place-items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className="f bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies?.map((data, index) => {
            return (
              <div
                key={index}
                className="w-[160px] sm:w-[200px]  md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block rounded "
                  src={`${IMAGEURL300}${data?.img}`}
                  alt={data?.title}
                />
                <div className="absolute  top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
                  <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
                    {data?.title}
                  </p>
                  <p
                    onClick={() => deleteDoc(data.id)}
                    className="absolute text-gray-400 top-4 right-4 "
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
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
