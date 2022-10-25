import styled from "styled-components";

export const Sobre = styled.section`
height:30rem;
position: absolute;
display: flex;
flex-direction: column;
align-items: center ;
justify-content: space-around;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 60%;


img{
  width: 12rem;
}

@media (min-width: 768px){
  

  
  img{
    width: 25rem;
  }
  width:100%;
  justify-content: space-evenly;
  flex-direction: row;
}

`

export const Section = styled.section`

height:16rem;
display: flex;
flex-direction: column;
 justify-content: space-around;
`

export const Text = styled.section`

text-align: center;
font-size: 1rem;
height: 10rem;
color: white;
display: flex;
flex-direction: column;
justify-content: space-evenly;

@media (min-width: 768px){
  flex-wrap:wrap;
  height: 8rem;
  width:45rem;
  font-size: 1.5rem;
} 


`

export const Buttons = styled.section`
display: flex;
justify-content: space-around;

button{
  margin-left: 2rem;
  height: 3rem;
  width: 6rem;
  color: white;
  background-color: transparent;
  border: 2px solid #2438F0;
}
`