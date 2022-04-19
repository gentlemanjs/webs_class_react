import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import Footer from "../layout/Footer";
import axios from "axios";


// function Portfolio(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <Title title={["Portfolio","Site"]}/>
//                 <PortCont />
//                 <Contact />
//             </Contents>
//         </>
//     )
// }

class Portfolio extends React.Component {
    state = {
        isLoading : true,
        ports: [],
    }
    mainAnimation = () =>{
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
            gsap.to(".port__inner", {
                duration: 1.2,
                y: 0,
                opacity: 1,
                ease: "back.out(2.2)",
                delay: 1.0})
        }, 10);
    }

    getPorts = async () => {
        const { data : {data : {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        this.setState({ports : ports});
        // console.log(ports[0].id)




        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading:false});
            this.mainAnimation();
        }, 1600);
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작");
            document.getElementById("loading").classList.remove("loading__active");
            this.getPorts();
        }, 2000);
    }

    render(){
        const {isLoading, ports} = this.state;
        console.log(ports)
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header/>
                        <Contents>
                            <Title title={["Portfolio","Site"]}/>
                            <PortCont 
                                data={ports}
                            />
                            <Contact />
                        </Contents>
                        <Footer/>
                    </>
                )}
            </>
        )
    }
}

export default Portfolio;