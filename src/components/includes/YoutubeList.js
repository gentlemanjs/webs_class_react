import React from 'react'
import YoutubeItem from "./YoutubeItem"


function YoutubeList(props) {
  return (
        <ul>
            {props.videos.map((list,index) => (
                <YoutubeItem 
                    key={index}
                    video={list}
                />
            ))}
        </ul>
  )
}

export default YoutubeList