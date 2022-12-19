import React from 'react'
import Navigation from "../../common/layout/Nav";
import HomePageContentHead from "./content/Head";
import HomePageContentAbout from "./content/About";
import HomePageContentReason from "./content/Reason";
import HomePageContentLearnMore from "./content/LearnMore";

const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <div className={"pt-24 bg-gray-100"}>
                <HomePageContentHead/>
                <HomePageContentAbout/>
                <HomePageContentReason/>
                <HomePageContentLearnMore/>
            </div>
        </div>
    )
}

export default HomePage