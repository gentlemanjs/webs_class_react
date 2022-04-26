// import React from 'react'

// function YoutubeItem(props){
//     return (
//         <li>
//             <img src={`https://image.tmdb.org/t/p/w500/${props.results.poster_path}`} alt="" />
//             <p className="title">{props.results.title}</p>
//         </li>
//     )
// }

// function MovieList(props) {
//   return (
//                 <ul>
//                     {props.items.data.results.map((list,index) => (
//                         <YoutubeItem 
//                             key={index}
//                             results={list}
//                         />
//                     ))}
//                 </ul>
//   )
// }

// export default MovieList

import React from 'react'
import MovieItem from "./MovieItem"


function MovieList(props) {
    console.log(props)
  return (
        <ul>
            {props.videos.map((list,index) => (
                <MovieItem 
                    key={index}
                    results={list}
                />
            ))}
        </ul>
  )
}

export default MovieList