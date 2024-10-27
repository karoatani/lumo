import React from "react";
import RoundedButton from "./RoundedButton";

const CardImage = ({cardTitle ,cardBody ,cardImage,cardImageDirectionRight=true}) => {
    if (cardImageDirectionRight){
        return (
            <div className="flex gap-5 rounded-[40px] shadow-lg border min-w-max ">
        
                
              <div className="flex flex-col flex-nowrap gap-2 items-start p-5 ">
                <img src="/images/hanger-fashion.svg" alt="" />
                <p className="text-[#9697AB] text-xs uppercase tracking-wider whitespace-nowrap">{cardTitle}</p>
                <h2 className="text-[#333C4F] font-bold text-2xl whitespace-nowrap">{cardBody}</h2>
                <div>
                <RoundedButton/>
                </div>
        
              </div>
              <div className="rounded-[40px] flex max-h-full max-w-full">
              <img src={cardImage} alt="" className=" bg-cover h-full rounded-[40px] w-full"/>
              
              </div>
            </div>
        )
    }
   return (
    <div className="flex gap-5  rounded-[40px] shadow-lg border">

      {/* <div className="w-full h-full justify-self-end rounded-[40px]"> */}
      <img src={cardImage} alt="" className="rounded-[40px] bg-cover"/>
      
      {/* </div> */}
        
      <div className="flex flex-col flex-nowrap gap-2 items-start p-5">
        <img src="/images/hanger-fashion.svg" alt="" />
        <p className="text-[#9697AB] text-xs uppercase tracking-wider whitespace-nowrap">{cardTitle}</p>
        <h2 className="text-[#333C4F] font-bold text-2xl whitespace-nowrap">{cardBody}</h2>
        <div>
        <RoundedButton/>
        </div>

      </div>
    </div>
)
  
}

export default CardImage