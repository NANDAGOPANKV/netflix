import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IMAGEURL300 } from "../../config/request/Tmdb";
import { UserAuth } from "../../context/authContext/AuthContext";
import { db } from "../../config/firebase/Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const Movie = ({ data, index }) => {
  const [likes, setLikes] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieId = doc(db, "users", `${user?.email}`);

  const handleFavoriteContent = async () => {
    if (user?.email) {
      setLikes(!likes);
      setSaved(true);
      await updateDoc(movieId, {
        favoriteContect: arrayUnion({
          id: data.id,
          title: data.title,
          img: data.backdrop_path,
        }),
      });
    } else {
      alert("Create An Account Then Try");
    }
  };

  return (
    <div
      key={index}
      className="w-[160px] sm:w-[200px]  md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        className="w-full h-auto block rounded "
        src={`${IMAGEURL300}${data?.backdrop_path}`}
        alt={data?.original_title || data?.title}
      />
      <div className="absolute  top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
          {data?.title}
        </p>
        <p onClick={handleFavoriteContent}>
          {likes ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
      {saved ? '' : ''}
    </div>
  );
};
