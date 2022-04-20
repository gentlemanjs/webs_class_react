import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header/>
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer/>
//         </>
//     )
// }

class Main extends React.Component {
    state = {
        isLoading: true,
    }

    getSite = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 1.2,
                top: 0})
            gsap.to("#footer", {
                duration: 1.2,
                delay: 1.6,
                bottom: 0})
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.6,
                y: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 1.2})
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.6,
                y: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 1.5})
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.6,
                y: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 1.8})
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.6,
                y: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 2.1})
        }, 100);
    }
    getPorts = () => {
        setTimeout(() => {
            this.setState({isLoading:false});
            this.getSite();
        }, 1600);
    }
    
    componentDidMount(){
        setTimeout(() => {
            document.querySelector("body").style.background ="#000"
            document.getElementById("loading").classList.remove("loading__active");
            this.getPorts();
        }, 3000);
    }

    render(){
        const {isLoading} = this.state;
        
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header/>
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer/>
                    </>
                )}
            </>
        )
    }
}

export default Main;