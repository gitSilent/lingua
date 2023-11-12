import React from "react";
import Header from "../components/Header";
import mainBg from "../media/svg/main-bg.svg";
import tgIcon from "../media/svg/tg-icon.svg";
import bgItemsMobile from "../media/mainPage_headerItems-mobile.png";
import bgItemsPc from "../media/mainPage_headerItems-pc.png";
import MainScreen from "../components/MainScreen";

export default function MainPage() {
    return (
        <div className="h-full relative">
            <Header />
            <MainScreen/>
        </div>
    );
}
