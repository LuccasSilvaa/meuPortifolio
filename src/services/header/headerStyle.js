import styled from "styled-components";
import Headeer from "./index";
import Navbar from './img/menu.png'

export const Header = styled.header`
height: 4rem;
border-bottom: 1.5px solid black;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-around;
background-color: #030A6B;
color: white;

@media (max-width: 768px){
  height: 2rem;
 }


 h1{
  font-size: 1.2rem;
 }

 @media (min-width: 768px){
  
  h1{
    font-size: 3rem;
  }
}


`
export const Dropdown = styled.section`

width: 2rem;
position: relative;
margin-top: 11rem;
height: 13rem;

ul{
  list-style: none;
}
li{
  color: white;
}
   button{
    border: none;
    width: 2rem;
    height: 2rem;
     background-color: transparent;
     background-image: url(${Navbar});
     background-size: 2rem;
     background-repeat: no-repeat;
     background-position: center;
   }
 @media (min-width: 768px){
  display:none;
 }

`

export const Nav = styled.section`
display: none;


/* font-size: 0.8rem;

width: 16rem;
display: flex;
justify-content: space-around; */

p{
  color:white;
}

@media (min-width: 768px){
  display: flex;
  width: 25rem;
  font-size: 1.5rem;
  p{
      margin-left: 2rem;
  }
}

`