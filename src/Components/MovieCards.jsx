import React, { useEffect, useState } from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import {CardImage} from '../Style/Style'

const MovieCards = (props) => {

  const {content} = props;

  const[isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
  }, 500)
  },[])


  return (
    isLoading 
    ?
      <CardImage>
         <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2}/> 
          </SkeletonTheme>
        </div>
      </CardImage>
    :
        <Link to={`/details/${content.title}`} style={{textDecoration:'none',color:'white'}}>
          <CardImage>
            <div className="cards">
                  <img className='card-image' src={content.poster_link?content.poster_link:"https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"} alt='down'/>
                  <div className="card-overlay">
                    <div className="card-title">{content.title?content.title:"NA"}</div>
                    <div className="card-runtime">{content.release_date?content.release_date.slice(0,10):"NA"}</div>
                      <div className="card-rating">{content.vote_average?content.vote_average:"NA"}</div>
                    <div className="card-dis">{content.overview?content.overview.length>100?content.overview.slice(0, 100)+"...":content.overview:"NA"}</div>
                  </div>
              </div>           
          </CardImage>
        </Link>
  )
}

export default  MovieCards