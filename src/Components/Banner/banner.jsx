import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios.jsx'
import {API_KEY,imageURL} from '../../constants/constants.jsx'

function Banner() {
   const [movie, setMovie] = useState()
  
   
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      console.log(response.data.results[randomIndex]);
      setMovie(response.data.results[randomIndex])
    })
  },[])
  return (
    
      
    <div className='banner'  style={{
    backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})`,
 
  }} >  
   
        <div className='content'>
            <h1 className='title'>{movie?.title || movie?.name || movie?.original_name || ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                 <button className='button'>My List</button>

            </div>
            <h1 className='description'>{movie? movie.overview : ""}</h1>

     </div> 
     <div className="fade_bottom"></div>
    </div>
    
  
  )
}

export default Banner
