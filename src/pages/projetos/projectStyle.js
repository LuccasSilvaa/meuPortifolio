import styled from "styled-components";

export const Projetos = styled.div`
height: 30rem;

display: flex;
justify-content: center;
align-items: center;
`
export const Section = styled.div`
width: 50%;

/* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); */
`
export const Card = styled.div`

padding-bottom: 2rem;
border-bottom: 2px solid #2438F0;
box-shadow: 0.5px 0.5px 2px 2px black;
  margin-top: 20px;
  margin-left: 40px;
  border-radius: 10px;
justify-content: center;
justify-content: space-between;
height: 20rem;
display: flex;
flex-direction: column;
align-items: center;
width: 15rem;
color: white;
p{
  text-align: center;
  font-size: 0.6rem;
}
img{
object-fit: cover;
height: 9rem;
width:14rem;}
`
export const Buttons = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
a{
  display: flex;
  justify-content: center;
  align-items: center;
 font-size: 0.8rem;
  height: 1.5rem;
  width: 5rem;
  color: white;
  background-color: transparent;
  border: 2px solid #2438F0;
}
`