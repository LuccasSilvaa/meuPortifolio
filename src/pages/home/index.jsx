import React from 'react';
import * as S from './homestyle';
import Developer from './img/programming.png'
import Typical from 'react-typical'

export default function Home() {
  return (
    <S.Home>
      <img src={Developer} alt="logo" />
      <S.Section>
        <S.Descrition>
          <p>Olá, Eu sou</p>
          <h2>Luccas Silva</h2>
          <Typical
        steps={['Desenvolvedor front-end', 1,]}
        loop={Infinity}
        wrapper="p"
      />
        </S.Descrition>
        <S.Buttons>
        <a href='https://www.linkedin.com/in/luccassilvaa/'>Linkedin</a>
        <a href='https://github.com/LuccasSilvaa'>Github</a>
        </S.Buttons>
      </S.Section>
    </S.Home>
  );
}
