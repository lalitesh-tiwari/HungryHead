import React, { useState } from "react";
import Header from "../components/Header";
import Exploremenu from "../components/Exploremenu";
import FoodDisplay from "../components/FoodDisplay";

const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
