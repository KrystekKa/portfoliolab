import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <FourSteps />
            <AboutUs />
            <Foundation />
            <Contact />
        </>
    )
}