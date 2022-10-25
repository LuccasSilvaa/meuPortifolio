import styled from "styled-components";

export const Section = styled.section`

height: 30rem;
color: white;
display: flex;
justify-content: center;
align-items: center;

`
export const Card = styled.section`

margin-top: 6rem;

justify-content: center;
justify-content: space-around;
align-items: center;
height: 26rem;
display: flex;
flex-direction: column;


img{
  position: relative;
  width: 6rem;
}

figcaption{
  position: relative;
  
  ::before{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4rem;
    top: 1rem;
    content:'';
    width:4rem;
    height: 4px;
    background-color: currentColor;
    border-radius: 3px;
    display: block;
    margin: 0 auto;
  }
}
`

 export const Descrition = styled.section`
 padding-top: 2rem ;

 height:23rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 
 justify-content: space-evenly;
 width: 13rem;
h2{
  margin-top: 2rem;
}
 p{
  margin-top: 2rem;
  text-align: center;
  font-size:0.9rem;
 
 } 
 `