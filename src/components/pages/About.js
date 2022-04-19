import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import AboutCont from "../includes/AboutCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function About(){
    return (
        <>
            <Header color="light"/>
            <Contents color="light">
                <Title title={["about","me"]}
                    color = "light"
                />
                <AboutCont />
                <Contact />
            </Contents>
            <Footer color = "light" />
        </>
    )
}

export default About;