import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import Hero from './Hero'
import {Container} from '../Style/Style'
// import { Movies } from './Movies';
import axios from 'axios';

const Home = () => {   
  const [data,setData] = useState([]);

  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/top-movies`)
      .then((res)=>setData(res.data))
      .catch((err)=>err)
  },[])

  // console.log(data);

  return (
    <div>
        <div>
            <Hero/>
        </div>
        <Container>
            {
                data.map((item)=>(
                    <MovieCards key={item.id} content = {item}/>
                    ))
                }
        </Container>
    </div>
  )
}

export default Home