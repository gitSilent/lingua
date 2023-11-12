import React from "react";
import menu from "../media/svg/menu-bars.svg";
import logo from "../media/svg/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed w-full shadow-header z-50 bg-[#F3F4F5]">
            <div className="max-w-[1200px] w-full mx-auto px-[20px] py-[10px] flex justify-between items-center">
                <div className="flex gap-[8px]">
                    <img src={menu} alt="" className="max-w-[24px] w-full l:hidden" />
                    <img src={logo} alt="" className="max-w-[89px] w-full l:max-w-[106px] l:h-[24px]" />
                </div>
                <div className="flex gap-[25px] items-center">
                    <div className="hidden l:flex gap-[20px] font-medium text-[16px]">
                        <Link to={"#"}>О нас</Link>
                        <Link to={"#"}>Репетиторы</Link>
                        <Link to={"#"}>Стоимость</Link>
                        <Link to={"#"}>Отзывы</Link>
                        <Link to={"#"}>Частые вопросы</Link>
                        <span className="block font-bold text-[16px]">+7 923 782 49-52</span>
                    </div>

                    <div className="flex gap-[10px]">
                        <div className="hidden sl:block bg-[white] p-[10px] h-fit rounded-[8px] font-semibold text-black border-[1px] border-[#E3E3E3] text-[14px]  text-center l:py-[15px] l:px-[20px]">Мы перезвоним</div>
                        <div className="bg-[#00BA61] p-[10px] h-fit rounded-[8px] font-semibold text-white text-[14px]  text-center l:py-[15px] l:px-[20px]">Бесплатные 2 часа</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
