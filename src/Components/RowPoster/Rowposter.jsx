import React, {useEffect,useState} from 'react'
import './Rowposter.css'
import youtube from 'react-youtube'
import {API_KEY,imageURL} from '../../constants/constants.jsx'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Rowposter(props) {
  const [movies,setMovies]=useState([])
  const [urlID,seturlID]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
      //console.error("Network Error")
    })
},[])
 const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
  const handleMovie=(id)=>{
    console.log(id)
      const type = props.title === "Netflix Originals" ? "tv" : "movie";
    axios.get(`${type}/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
       if(response.data.results.length!=0){
        seturlID(response.data.results[0].key)
       }else{
        console.log("Array Empty")
       }

    })

  }
  
  return (
    <div className='row'>
      <h2>{props.title }</h2>
      <div className='posters'>
        {movies.map((obj)=>
           
           <img  onClick={()=>handleMovie(obj.id)}  className={props.isSmall?"smallPoster": "poster"} src={`${imageURL+obj.backdrop_path}`} alt="poster" />
      
        )}
       
      </div>
      {urlID && <YouTube videoId={urlID} opts={opts} />}
      
    </div>
  )
}

export default Rowposter
