import React from 'react'
import Navigation from "../../common/layout/Nav";
import HomePageContentHead from "./content/Head";
import HomePageContentAbout from "./content/About";
import HomePageContentReason from "./content/Reason";
import HomePageContentUpSell from "./content/UpSell";
import HomePageContentMarketing from './content/Marketing';
import HomePageContentFeatures from './content/Features';
import HomePageContentTrial from './content/Trial';
import Footer from '../../common/layout/Footer';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <div className={"pt-24 bg-gray-100"}>
                <HomePageContentHead />
                <HomePageContentAbout />
                <HomePageContentReason />
                <HomePageContentUpSell />
                <HomePageContentMarketing />
                <HomePageContentFeatures />
                <HomePageContentTrial />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage