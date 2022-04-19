import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ScriptCont from "../includes/ScriptCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

function Script(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["script","page"]}/>
                <ScriptCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Script;