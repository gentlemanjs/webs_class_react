import React, { useEffect,useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import YoutubeSearch from "../includes/YoutubeSearch";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import YoutubeList from "../includes/YoutubeList";
import Loading from "../basics/Loading";
// import axios from "axios";
import { gsap } from "gsap";


function Youtube(){
    const [videos, setVideos] = useState([])
    
    const MainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");

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
                gsap.to(".youtube__inner", {
                    duration: 1.2,
                    opacity: 1,
                    y: 0,
                    ease: "back.out(2.2)",
                    delay: 0.8}) 
            }, 2000);
        }, 2000);
    }
    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EC%84%B1%EC%8B%9C%EA%B2%BD&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items);
                MainAnimation();
            })
            .catch(error => console.log('error', error));
    }, [])
    return (
        <>
            <Loading/>
            <Header />
            <Contents>
                <Title title={["youtube","book"]} />
                <section>
                    <div className="container">
                        <div className="youtube__inner">
                            <YoutubeSearch onSearch={search} />
                            <YoutubeList videos={videos} />
                        </div>
                    </div>
                </section>
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube

// class Youtube extends React.Component {
//     state = {
//         isLoading : true,
//         lists: [],
//         searchs : []
//     }
//     mainAnimation = () => {
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
//             gsap.to(".youtube__inner", {
//                 duration: 1.2,
//                 opacity: 1,
//                 y: 0,
//                 ease: "back.out(2.2)",
//                 delay: 0.8}) 
//         }, 10);
//     }

//     getYoutubes = async (query) => {
//         const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EC%84%B1%EC%8B%9C%EA%B2%BD&type=video&key=AIzaSyB7H7_i31u65SWgiBLONwH9vuFJgICvxtU")
        
//         const searchs = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyB7H7_i31u65SWgiBLONwH9vuFJgICvxtU`)

//         this.setState({lists, searchs, isLoading: false})
//         this.mainAnimation();
//         console.log(lists)
//     }

//     componentDidMount(){
//         setTimeout(()=>{
//             document.getElementById("loading").classList.remove("loading__active");
//             this.getYoutubes();
//         }, 2000);
//     }

//     render(){
//         const {isLoading , lists, searchs} = this.state

//         return (
//             <>
//                 {isLoading ? (
//                     <Loading />
//                  ) : (
//                     <>
//                         <Header />
//                         <Contents>
//                             <Title title={["Youtube","reference"]} />
//                                 <YoutubeSearch searchs={searchs} /> 
//                                 <YoutubeCont lists={lists}/>
//                             <Contact />
//                         </Contents>
//                         <Footer />
//                     </>
//                 )}
//             </>
            
//         )
//     }
// }
// export default Youtube;
