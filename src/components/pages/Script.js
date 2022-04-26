// import React from "react";
// import Header from "../layout/Header";
// import Contents from "../layout/Contents";
// import Title from "../layout/Title";
// import MovieCont from "../includes/MovieCont";
// import Contact from "../layout/Contact";
// import Footer from "../layout/Footer";
// import Loading from "../basics/Loading";
// import axios from "axios";
// import { gsap } from "gsap";

// // function Script(){
// //     return (
// //         <>
// //             <Header />
// //             <Contents>
// //                 <Title title={["script","page"]}/>
// //                 <MovieCont />
// //                 <Contact />
// //             </Contents>
// //             <Footer />
// //         </>
// //     )
// // }

// class Script extends React.Component {
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
//             gsap.to(".movie__inner", {
//                 duration: 1.2,
//                 opacity: 1,
//                 y: 0,
//                 ease: "back.out(2.2)",
//                 delay: 0.8}) 
//         }, 10);
//     }

//     getYoutubes = async () => {
//         const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=876c59b221fa56ea6af4e097f3d6a213&query=Spider+man")
//         this.setState({lists, isLoading: false})
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
//         const {isLoading , lists} = this.state

//         return (
//             <>
//                 {isLoading ? (
//                     <Loading />
//                  ) : (
//                     <>
//                         <Header />
//                         <Contents>
//                             <Title title={["script","page"]}/>
//                             <MovieCont lists={lists}/>
//                             <Contact />
//                         </Contents>
//                         <Footer />
//                     </>
//                 )}
//             </>
            
//         )
//     }
// }

// export default Script;

import React, { useEffect,useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieSearch from "../includes/MovieSearch";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
import MovieList from "../includes/MovieList";
import Loading from "../basics/Loading";
// import axios from "axios";
import { gsap } from "gsap";


function Script(){
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
                gsap.to(".movie__inner", {
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
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=spiderman`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results)
                MainAnimation();
            })
            .catch(error => console.log('error', error));
    }, [])
    console.log(videos)

    return (
        <>
            <Loading/>
            <Header />
            <Contents>
                <Title title={["movie","book"]} />
                <section>
                    <div className="container">
                        <div className="movie__inner">
                            <MovieSearch onSearch={search} />
                            <MovieList videos={videos} />
                        </div>
                    </div>
                </section>
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Script