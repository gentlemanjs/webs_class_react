import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import AboutCont from "../includes/AboutCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";


// function About(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//                 <Title title={["about","me"]}
//                     color = "light"
//                 />
//                 <AboutCont />
//                 <Contact />
//             </Contents>
//             <Footer color = "light" />
//         </>
//     )
// }
class About extends React.Component {
    state = {
        isLoading: true
    }

    getSite = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.8,
                top: 0})
            gsap.to("#footer", {
                duration: 1.2,
                delay: 0.4,
                bottom: 0})
            gsap.to(".cont__title strong", {
                duration: 1.2,
                x: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 0.6})
            gsap.to(".cont__title em", {
                duration: 1.2,
                x: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 0.8})
            gsap.to(".about__cont1", {
                duration: 1.2,
                opacity: 1,
                y: 0,
                ease: "back.out(2.2)",
                delay: 0.8})
            gsap.to(".about__cont2", {
                duration: 1.2,
                opacity: 1,
                y: 0,
                ease: "back.out(2.2)",
                delay: 0.8})
            gsap.to(".about__cont3", {
                duration: 1.2,
                opacity: 1,
                y: 0,
                ease: "back.out(2.2)",
                delay: 0.8})
        }, 10);
    }
    getPorts = () => {
        setTimeout(() => {
            this.setState({isLoading:false});
            this.getSite();
        }, 1600);
    }
    componentDidMount(){
        setTimeout(() => {
            this.getPorts();
            document.querySelector("body").style.background ="#F0EEEB"
            document.getElementById("loading").classList.remove("loading__active");
        }, 2000);
    }
    
    render(){
        const {isLoading} = this.state;
        
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
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
                )}
            </>
        )
    }

}

export default About;