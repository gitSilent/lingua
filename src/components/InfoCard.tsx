import React from "react";
import { IInfoCard } from "../api/models";

export default function InfoCard({ img, title, desc, withButton, buttonText }: IInfoCard) {
    return (
        <div className="flex flex-col gap-[15px] max-w-[335px] h-fit p-[20px] rounded-[12px] m:max-w-[380px] border-[1px] border-black">
            <div className="h-[160px] m:h-[220px] w-full">
                <img src={img} alt="" className="object-cover w-full h-full rounded-[8px]" />
            </div>
            <div className="flex flex-col gap-[8px]">
                <h2 className="font-black text-[#2D2D2D] text-[20px]">{title}</h2>
                <p className="text-[16px] font-medium text-[#787878]">{desc}</p>
            </div>
            {withButton 
            ? 
                <div className="bg-[#00BA61] p-[15px] mt-[18px] w-full h-fit rounded-[8px] font-semibold text-white text-[14px] text-center">{buttonText}</div>
            :
                <></>
            }
        </div>
    );
}
