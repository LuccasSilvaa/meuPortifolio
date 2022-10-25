import styled from "styled-components";

export const Home = styled.section`
height:20rem;
position: absolute;
display: flex;
flex-direction: column;
align-items: center ;
justify-content: space-around;
top: 45%;
left: 50%;
transform: translate(-50%, -50%);
width: 60%;

img{
  width: 8rem;
}

@media (min-width: 768px){
  width:100%;
  justify-content: space-evenly;
  flex-direction: row;
  img{
    width: 15rem;
  }
}

`

export const Section = styled.section`

width: 25rem;
height:13rem;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`

export const Descrition = styled.section`


text-align: center;
font-size: 1rem;
height: 6rem;
color: white;
display: flex;
flex-direction: column;
justify-content: space-evenly;

h2{
  color: #2438F0;
}

@media (min-width: 768px){
  height: 8rem;
  width:100%;
  font-size: 1.5rem;
} 


`

export const Buttons = styled.section`

display: flex;
justify-content: space-around;
align-items: center;
a{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  height: 3rem;
  width: 6rem;
  color: white;
  background-color: transparent;
  border: 2px solid #2438F0;

}
`