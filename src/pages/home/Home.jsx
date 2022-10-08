import React from "react";
import { Main } from "../../components/main/Main";
import { Row } from "../../components/rows/Row";
// urls - movies
import requests from "../../config/request/Tmdb";

export const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1'  title="UpComing" URL={requests.upComing} />
      <Row rowId='2'  title="Popular" URL={requests.popular} />
      <Row rowId='3'  title="Trending" URL={requests.trending} />
      <Row rowId='4'  title="Top Rated" URL={requests.topRated} />
      <Row rowId='5'  title="Horror" URL={requests.horror} />
    </>
  );
};
