import React from "react";
import { IAboutCard } from "../api/models";

export default function AboutCard({title, desc,bgChar}:IAboutCard) {
    return (
        <div className="relative overflow-hidden min-w-[285px] max-w-[335px] h-fit p-[20px] bg-[#F3F4F5] rounded-[12px] l:max-w-[380px]">
            <h3 className="font-black text-[20px] text-[#2D2D2D] mb-[8px]">Никаких секретов</h3>
            <p className="font-medium text-[14px] text-[#787878]">
                {desc}
            </p>
            <span className="absolute block right-[-50px] z-[-1] top-[-80px] font-black text-[300px] text-[#E7F1EE]">{bgChar}</span>
        </div>
    );
}
