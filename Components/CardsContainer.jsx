import React from "react";
import Card from "./Card";

const CardsContainer = () => {
  return (
    <>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CardsContainer;
