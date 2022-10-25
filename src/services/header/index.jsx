
import React, {useState} from 'react'
import * as S from './headerStyle'
import {Link} from 'react-router-dom';


export default function Header() {
  const [status,setstatus] = useState(false)
  
  const menu = () => {
    setstatus(!status)
    
  }

  return (
    <S.Header>
    <h1>LUCCAS</h1>
    <S.Dropdown>
    <button onClick={() => {menu()}}></button>
    {status 
    && <ul>
    <Link to="/"><li>Home</li></Link>
    <Link to="/habilidades"><li>Habilidades</li></Link>
    <Link to="/sobre"><li>Sobre</li></Link>
    <Link to="/projetos"><li>Projetos</li></Link>
    </ul>
     }
    </S.Dropdown>

    <S.Nav>
   <Link to="/"><p>Home</p></Link>
    <Link to="/sobre"><p>Sobre</p></Link>
    <Link to="/habilidade"><p>Habilidades</p></Link>
    <Link to="/projetos"><p>Projetos</p></Link>
    </S.Nav>
  
  
    


       </S.Header>
  )
}
