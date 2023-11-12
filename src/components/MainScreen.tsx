import React from "react";
import mainBg from "../media/svg/main-bg.svg";
import tgIcon from "../media/svg/tg-icon.svg";
import bgItemsMobile from "../media/mainPage_headerItems-mobile.png";
import bgItemsPc from "../media/mainPage_headerItems-pc.png";

export default function MainScreen() {
    return (
        <section className="main-screen bevealed-bottom relative overflow-hidden w-full h-full pt-[64px] max-h-[594px] bg-[#F3F4F5] l:max-h-[775px]">
            <img src={mainBg} alt="" className="absolute w-full z-[1] xm:h-full" />
            <div className="max-w-[1200px] h-full max-h-[455px] w-full mx-auto z-[10]">
                <img src={bgItemsPc} alt="" className="hidden l:block fixed z-[20] max-w-[1200px] top-[0] left-[25%] xl:left-[35%] uw:left-[45%]" />
                <div className="flex flex-col relative h-full justify-between mt-[25px] px-[20px] l:mt-[66px]">
                    <div>
                        <img src={bgItemsMobile} alt="" className="absolute object-cover top-[20px] left-[-50px] min-w-[500px] max-w-[600px] w-full z-[2] l:hidden" />
                        <h1 className="font-black text-[34px] l:text-[64px] text-[#2D2D2D]">
                            Изучайте язык так,
                            <br /> как удобно Вам!
                        </h1>
                        <p className="mt-[15px] font-medium text-[16px] l:text-[20px] leading-[1.4] text-[#787878]">
                            Индивидуальный план под Ваши нужды,
                            <br /> профи в области лингвистики и педагогики,
                            <br /> разные форматы - все это в INSPIRA”
                        </p>
                    </div>
                    <div className="flex flex-col gap-[10px] l:max-w-[335px]">
                        <p className="text-center font-medium italic text-[12px] text-[#787878] l:text-[14px] l:text-left">*Нажимайте на кнопочку, ведь иностранный язык сам себя не выучит! ツ</p>
                        <div className="bg-[#00BA61] p-[10px] h-fit rounded-[12px] font-bold text-white text-[18px] text-center py-[20px] px-[20px]">Получить скидку 25%</div>
                    </div>
                    <div className="hidden l:flex items-center text-[#787878] gap-[15px] text-[14px] font-medium italic">
                        <img src={tgIcon} alt="" />
                        <span>
                            А ещё, пописывайтесь <br /> на наш телеграм-канал!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
