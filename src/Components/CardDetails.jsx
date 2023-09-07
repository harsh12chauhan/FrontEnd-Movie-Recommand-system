import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardDetail,Button,Container } from '../Style/Style';
import MovieCards from './MovieCards'
import axios from 'axios';


const CardDetails = () => {
    const {id} = useParams();
    const[recommend,setRecommend] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/recommend-movies/${id}`)
        .then((res)=>setRecommend(res.data))
        .catch((err)=>err);

        window.scrollTo(0,0);
    },[id])

    console.log(id);

    const movieDetail = recommend?.detail

  return (
    <>
    <CardDetail>
        <div className="detail-background">
            <img className="detail-background-img" src={movieDetail?.poster_link?movieDetail?.poster_link:"https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"}  alt='down'/>
        </div>
        <div className="detail-main">
            <div className="detail-leftSide">
                <div>
                    <img className="movie-poster" src={movieDetail?.poster_link?movieDetail?.poster_link:"https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"}  alt='down'/>
                </div>
            </div>
            <div className="detail-rightSide">
                <div className="detail-rightSide-top">
                    {/* <div className="detail-title">{content.title?content.title.toUpperCase():"NA"}</div> */}
                    <div className="detail-title">{movieDetail?.title?movieDetail?.title.toUpperCase():"NA"}</div> 
                    <div className="detail-rating">{movieDetail?.vote_average?movieDetail?.vote_average:"NA"}</div>
                    <div className="detail-releaseDate">{movieDetail?.release_date?movieDetail?.release_date.slice(0,10):"2019-11-10"}</div>
                    <div className="genres">                      
                    <span className='gen'>{movieDetail?.genres?movieDetail?.genres:"Action Horror Sci-Fi"}</span>                                  
                    </div>
                    <div className="movie__des">{movieDetail?.overview?movieDetail?.overview.length>50?movieDetail?.overview.slice(0,50):movieDetail?.overview:"A film also called a movie, motion picture, moving picture, picture, photoplay is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images."}</div>
                    <div className="button">
                        <Button className='h'>Watch Trilar</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="headings">
            <h1>{"Recommended Movies".toUpperCase()}</h1>
        </div>
        <Container>
        {
            recommend?.recommendations?.map((item)=>(
                <MovieCards key={item.id} content = {item}/>
                ))
        }
        </Container>
        </CardDetail>
        </>
  )
}

export default CardDetails