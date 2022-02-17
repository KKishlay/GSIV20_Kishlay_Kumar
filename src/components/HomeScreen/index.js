import React from "react";
import MainContainer from "../MainContainer";
import requests from "../Requests/requests";

const HomeScreen = () => {
  return (
    <div>
      <MainContainer fetchUrl={requests.fetchPopular} />
    </div>
  );
};

export default HomeScreen;
