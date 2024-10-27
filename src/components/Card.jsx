import React from "react";
import RoundedButton from "./RoundedButton";
const Card = ({cardHeader, cardTitle,cardBody, cardImage}) => {
  return (
    <>
    <div className="flex flex-col gap-5 p-5 rounded-2xl shadow-lg border">
      <img src={cardImage} alt="" style={{ "height": "87px", "width":"103px"}}/>
      <h2 className="text-[#333C4F] font-bold text-2xl">{cardHeader}</h2>
      <h3 className="text-[#9697AB] font-bold  uppercase tracking-wide">{cardTitle}</h3>
      <p>
        {cardBody}
      </p>
      <div>
      <RoundedButton/>
      </div>
    </div>
      </>
  );
};

export default Card;
