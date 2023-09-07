import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { HeroContainer } from '../Style/Style';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Hero = () => {

  const[data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then((res)=>{
      setData(res.data.results);
    }).catch((err)=>err); 
  },[])

  return (
    <HeroContainer className='poster'>
      <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
        {
        data.map((item)=>(

         <Link to={`/details`} key={item.id} style={{textDecoration:'none',color:'white'}}>

              <div className="img-poster">
                  <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="img-poster"/>            
              </div>

              <div className='poster-overlay'>
                  <div className='poster-title'>{item.title}</div>
                    <div className="poster-runtime">
                        {item.release_date}
                        <span className="poster-rating">
                            {item.vote_average}
                        </span>
                  </div>
                  <div className='poster-des'>{item.overview}</div>
              </div>
          </Link>
        ))}
      </Carousel>
    </HeroContainer>   
  )
}

export default Hero