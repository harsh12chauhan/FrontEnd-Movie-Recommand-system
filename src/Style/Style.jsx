import { styled } from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    text-align: center;
    color: black;
    justify-content: center;
`
export const HeroContainer = styled.div`
    .img-poster{
      height: 400px;
    }
    .img-poster > img {
      margin: auto;
      display: block;
      width: 100%;
    }
    .poster-overlay {
      position: absolute;
      padding: 5rem;
      bottom: 0px;
      height: 70%;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: flex-end;
      align-items: flex-start;
      background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
      opacity: 1;
      transition: opacity .3s;
    }   
    .poster-overlay:hover {
      opacity: 1;
    }
    .poster-title {
      font-weight: 900;
      font-size: 4rem;
      margin-bottom: 0.4rem;
      text-align: left;
    }
    .poster-runtime {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .poster-rating {
      margin-left: 3rem;
    }
    .poster-des {
      font-style: italic;
      font-size: 1rem;
      margin-bottom: 0.25rem;
      display: flex;
      text-align: left;
      width: 50%;
}
`
export const CardImage = styled.div`
.cards {
  display: inline-block;
  transition: transform .2s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.19rem;
  cursor:pointer;
  min-width:130px;
  height:240px;
  z-index:0;
  border: 1px solid rgb(99, 99, 99);
}

.cards:hover {
  transform: scale(1.2);
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.card-image {
  height: 240px;
}
.card-overlay {
  position: absolute;
  padding: 0 1rem 1rem 1rem;
  bottom: 0px;
  height: 290px;
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
  opacity: 0;
  transition: opacity .2s;
}   

.card-overlay:hover {
  opacity: 1;
}

.card-title {
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.card-runtime {
  font-size: .75rem;
  margin-bottom: 0.25rem;
}

.card-rating {
  float: right;
}

.card-dis {
  font-style: italic;
  font-size: .75rem;
  margin-bottom: 0.25rem;
  text-align:left;
}        
`
export const CardDetail = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items: center;
    font-family:Arial, Helvetica, sans-serif;

    .detail-background{
      width: 100%;
      position:absolute;
      height:100%;
      top:0;
      left:0;
    }
  
  .detail-background-img{
      width: 100%;
      height: 70vh;
      object-fit:cover;
      object-position: 0 35%;
      border-radius:50px;
      filter: blur(3px);
  }

  .detail-main{
    position:relative;
      align-items: center;
      width: 95%;
      display: flex;
      position: relative;
      top:55px;
      margin-bottom:110px;
  }
  
  .detail-leftSide {
      margin-right: 60px;
  }
  
  .movie-poster{
      width:350px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
  }
  
  .detail-rightSide {
      color: white;
      display: flex;
      flex-direction: column;
      height: 510px;
      justify-content:space-between ;
  }
  
  .detail-rightSide-top > div{
      text-shadow: 0px 0px 5px #000000;
      margin-bottom: 1.2rem;
  }
  
  .detail-title{
      font-weight: 600;
      font-size: 3rem;
  }
  .genres{
      margin: 1.25rem 0;
  }
  .gen{
    border:2px solid black;
    border-radius:5px;  
    margin-right:7px;
    padding:4px;
    background-color:black;
  }
  .movie__des{
    font-size:1rem;
  }

  .headings{
      text-align:left;
      font-family:Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
    }
`
export const Button = styled.button`
  color: #ffffff;
  text-shadow: 0px 0px 5px #000000;
  box-shadow: 0px 0px 5px #000000;
  background-color:transparent;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffffff;
  border-radius: 3px;
  cursor:pointer;
  transition: transform .2s;
  &.h:hover{
    transform: scale(1.1);
  }
`;
