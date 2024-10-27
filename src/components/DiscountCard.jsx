import React from "react";
import Button from "./Button";

const DiscountCard = () => {
  return (
    <>
      <div className="bg-[#333C4F] flex flex-col gap-5 px-5 py-10 rounded-2xl items-center justify-center text-center shadow-lg border">
        <h2 className=" text-white font-bold  uppercase">Don't miss out on exclusive savings!</h2>
        <h2 className="text-white text-2xl uppercase font-bold">
          <span className="text-[#479CFC]">35%</span> DISCOUNT ON LAUNCH DAY
        </h2>
        <div>
          <Button buttonText="BOOK YOUR SEAT" bgColor={"#479CFC"} />
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
