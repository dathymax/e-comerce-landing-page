import React from 'react'
import Navigation from "../../common/layout/Nav";
import HomePageContentHead from "./content/Head";
import HomePageContentAbout from "./content/About";
import HomePageContentReason from "./content/Reason";

const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <div className={"pt-24 bg-gray-100"}>
                <HomePageContentHead/>
                <HomePageContentAbout/>
                <HomePageContentReason/>
            </div>
        </div>
    )
}

export default HomePage