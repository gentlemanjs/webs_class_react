import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Reference(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//                 <Title title={["REFERENCE","BOOK"]}
//                     color = "light"
//                 />
//                 <ReferCont />
//                 <Contact />
//             </Contents>
//             <Footer color = "light" />
//         </>
//     )
// }

// class Reference extends React.Component {
//     state = {
//         isLoading: true,
//         refers: []
//     }
//     getSite = () => {
//         setTimeout(() => {
//             gsap.to("#header", {
//                 duration: 0.8,
//                 top: 0})
//             gsap.to("#footer", {
//                 duration: 1.2,
//                 delay: 0.4,
//                 bottom: 0})
//             gsap.to(".cont__title strong", {
//                 duration: 1.2,
//                 x: 0,
//                 opacity: 1,
//                 ease: "back.out(2.2)",
//                 delay: 0.6})
//             gsap.to(".cont__title em", {
//                 duration: 1.2,
//                 x: 0,
//                 opacity: 1,
//                 ease: "back.out(2.2)",
//                 delay: 0.8})
//             gsap.to(".refer__inner", {
//                 duration: 1.2,
//                 opacity: 1,
//                 y: 0,
//                 ease: "back.out(2.2)",
//                 delay: 0.8})
//         }, 10);
//     }
//     getPorts = async () => {
//         const {
//             data: {
//                 data: {refer}
//             }
//          } = await axios.get("https://gentlemanjs.github.io/webs_class_react/src/assets/json/reference.json")

//         this.setState({refers: refer, isLoading:false})
//         setTimeout(() => {
//             this.getSite();
//         }, 1600);
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             document.querySelector("body").style.background ="#F0EEEB"
//             document.getElementById("loading").classList.remove("loading__active");
//             this.getPorts();
//         }, 2000);
//     }

//     render(){
//         const {isLoading, refers} = this.state;
//         console.log(refers)
        
//         return (
//             <>
//                 {isLoading ? (
//                     <Loading color="light"/>
//                 ) : (
//                     <>
//                         <Header color="light"/>
//                         <Contents color="light">
//                             <Title title={["REFERENCE","BOOK"]}
//                                 color = "light"
//                             />
//                             <ReferCont refer={refers}/>
//                             <Contact />
//                         </Contents>
//                         <Footer color = "light" />
//                     </>
//                 )}
//             </>
//         )
//     }
// }
class Reference extends React.Component {
    state = {
        isLoading : true,
        refers: []
    }

    mainAnimation = () => {
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
            gsap.to(".refer__inner", {
                duration: 1.2,
                opacity: 1,
                y: 0,
                ease: "back.out(2.2)",
                delay: 0.8})
        }, 10);
    }
    getRefers = async () => {
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://gentlemanjs.github.io/webs_class_react/src/assets/json/reference.json")
        this.setState({refers:refer, isLoading: false})
        this.mainAnimation();
    }


    componentDidMount(){
        setTimeout(()=>{
            document.querySelector("body").style.background ="#F0EEEB"
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers();
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents color="light">
                            <Title title={["REFERENCE","BOOK"]}
                                color = "light"
                            />
                            {/* <ReferCont refer={refers}/> */}
                            <section className="refer__cont">
                                <div className="container">
                                    <div className="refer__inner">
                                        <h2>CSS</h2>
                                        <ul className="refer__list">
                                            {refers.map((refer) => (
                                                <ReferCont
                                                    key={refer.id}
                                                    id={refer.id}
                                                    title={refer.title}
                                                    desc={refer.desc}
                                                    use={refer.use}
                                                    tag={refer.tag}
                                                    view={refer.view}
                                                    version={refer.version}
                                                    element={refer.element}
                                                    Accessibility={refer.Accessibility}
                                                    CrossBroswing={refer.CrossBroswing}
                                                    Definition={refer.Definition}
                                                    image={refer.image}
                                                    link={refer.link}
                                                    mdn={refer.mdn}
                                                    w3c={refer.w3c}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <Contact />
                        </Contents>
                        <Footer color = "light" />
                    </>
                )}
            </>
        )
    }
}
export default Reference;