import React from 'react'
import Eu from './img/eu.png'
import * as S from './sobrestyled'

export default function About() {
  return (
    <S.Sobre>
    <img src={Eu} alt="euzinho" />
    <S.Section>
    <S.Text>
      <h2>Sobre mim</h2>
      <p>Olá, eu me chamo Luccas e tenho 20 anos, desde de pequeno sou apaixonado por tecnologia, em 2022 comecei a estudar Front-end e pretendo seguir nessa carreira</p>
    </S.Text>
    <S.Buttons>
        <button>Curriculo</button>
        <button>Email</button>
     </S.Buttons>
    </S.Section>
    
    </S.Sobre>
  )
}
