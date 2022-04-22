import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";
import {Link} from "react-router-dom"

// function ReferDetail(props) {
//     console.log(props)
//     return (
//         <div>ReferDetail</div>
//     )
// }

// class ReferDetail extends React.Component {
//     componentDidMount(){
//         this.getSite();
//         document.querySelector("body").style.background ="#F0EEEB"
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
//             gsap.to(".refer__inner", {
//                 duration: 1.2,
//                 opacity: 1,
//                 y: 0,
//                 ease: "back.out(2.2)",
//                 delay: 0.8})
//         }, 10);
//     }

//     render(){
//         return (
//             <>
//                 <Header color="light"/>
//                 <Contents color="light">
//                     <section className="refer__cont">
//                         <div className="container">
//                             <div className="refer__inner">
//                                 <div>ddd</div>
//                             </div>
//                         </div>
//                     </section>
//                 </Contents>
//                 <Footer color = "light" />
//             </>
//         )
//     }
// }
function Definition({text}){
    return (
        <li>{text}</li>
    )
}
function Accessibility({text}){
    return (
        <li>{text}</li>
    )
}
class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/reference");
        }
        document.querySelector("body").style.background ="#F0EEEB"
        this.mainAnimation();
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
            gsap.to(".refer__inner", {
                duration: 1.2,
                opacity: 1,
                y: 0,
                ease: "back.out(2.2)",
                delay: 0.8})
        }, 10);
    }
    render(){
        const {location} = this.props;
        console.log(location)
        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else{
            return (
                
                <>
                    <Header color="light"/>
                    <Contents color="light">
                        <section className="refer__cont">
                            <div className="container">
                                <div className="refer__inner">
                                    <div className="refer__table">
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc}</p>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는 태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적 표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="refer__definition">
                                            <h4>정의(Definition)</h4>
                                            <ul>
                                                {location.state.Definition.map(data=>(
                                                    <Definition 
                                                        text={data}
                                                        key={data}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="refer__Accessibility">
                                            <h4>접근성(Accessibility)</h4>
                                            <ul>
                                                {location.state.Accessibility.map(data=>(
                                                    <Accessibility 
                                                        text={data}
                                                        key={data}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="refer__site">
                                            <h4>참고 사이트(Reference)</h4>
                                            <ul> 
                                                <li>mdn : <Link to={location.state.mdn}>
                                                        {location.state.mdn}
                                                    </Link></li>
                                                <li>w3c : <Link to={location.state.w3c}>
                                                        {location.state.mdn}
                                                    </Link>
                                                
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer color = "light" />
                </>
            )
        }
    }
}
export default ReferDetail