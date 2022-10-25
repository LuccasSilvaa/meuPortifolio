import React from 'react'
import * as S from './skillStyle'
import Carousel from 'nuka-carousel/lib/carousel'

export default function Skill() {

  const skill = [
  {
    imagem:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
    nome:'HTML5',
    descricao:'HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.',
  },
    {
    imagem:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
    nome:'CCS3',
    descricao:'CSS é uma linguagem de estilo, também conhecida como folhas de estilo em cascata. É usada para personalização visual de um site. Ou seja, elas servem para otimizar o conteúdo das páginas e permitir uma apresentação mais amigável para o usuário.',
    },
    {
    imagem:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    
    nome:'JAVASCRIPT',
    descricao:'Javascript, ou simplesmente JS, é uma linguagem de programação de uso geral, aplicada principalmente para desenvolvimento web e desenvolvimento de software.',},
    {
     imagem:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    nome:'REACT',
    descricao:'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    },
    {
     imagem:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    nome:'GIT',
    descricao:'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.',
    },
  ]

  return (
    <S.Section>
      <Carousel defaultControlsConfig={{
    nextButtonText: '🡆',
  prevButtonText: '🡄',
  pagingDotsStyle: {
    fill: 'red'
  }
}} slidesToShow={3.4}>

    {skill.map((item) => (
      <S.Card>

      <img src={item.imagem} alt="" />
      <figcaption></figcaption>

  
      <S.Descrition>
      <h2>{item.nome}</h2>
      <p>{item.descricao}</p>
      </S.Descrition>
      </S.Card>
    ))}
      </Carousel>
    </S.Section>
  )
}
