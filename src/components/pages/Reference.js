import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function Reference(){
    return (
        <>
            <Header color="light"/>
            <Contents color="light">
                <Title title={["REFERENCE","BOOK"]}
                    color = "light"
                />
                <ReferCont />
                <Contact />
            </Contents>
            <Footer color = "light" />
        </>
    )
}

export default Reference;