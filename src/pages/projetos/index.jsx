import React from 'react'
import * as S from './projectStyle'
import SemFoto from './img/semfoto.jpg'
import Movie from './img/Movie.png'
import CatDog from './img/catdog.png'
import TodoList from './img/todolist.png'
import IMC from './img/imc.png'
import Carousel from 'nuka-carousel/lib/carousel'

export default function Projects() {

  const projetos = [
    {imagem:CatDog,
      nome:"CatDog",
  descrição:"Um projeto de estudo sobre api que gera um imagem de gato ou cachorro aleatoriamente",
  repository: "https://github.com/LuccasSilvaa/CatDog",
deploy:"https://luccassilvaa.github.io/CatDog/"},

    {imagem:SemFoto,
      nome:"Calculadora",
  descrição:"aqui vai a desrcição do projeto",
  repository: "",
deploy:""},
    {
      imagem:Movie,
      nome:"Movie",
  descrição:"projeto usando a biblioteca React e Api que mostra a qualificação dos filmes",
  repository: "https://github.com/LuccasSilvaa/estudo-sobre-api",
deploy:"https://luccassilvaa.github.io"
    },
    {
      imagem:TodoList,
      nome:"Todo-List",
  descrição:"aqui vai a desrcição do projeto",
  repository: "",
deploy:""
    },{
      imagem:SemFoto,
      nome:"Harry Potter",
  descrição:"aqui vai a desrcição do projeto",
  repository: "",
deploy:""
    },
    {
      imagem:IMC,
      nome:"IMC",
  descrição:"projeto feito com Html, CSS e Javascript que mostra o indice corporal da pessoa",
  repository: "",
deploy:""
    },
    {
      imagem:SemFoto,
      nome:"ODS",
  descrição:"aqui vai a desrcição do projeto",
  repository: "",
deploy:""
    }
  ]
  return (
    <S.Projetos>
      <S.Section>

    <Carousel defaultControlsConfig={{

    nextButtonText: '🡆',
  prevButtonText: '🡄',
  pagingDotsStyle: {
    fill: 'red'
  }
}} slidesToShow={3.4}>

    {projetos.map((item) => (
      <S.Card>
      <img src={item.imagem} alt="SemFoto" />
      <h2>{item.nome}</h2>
      <p>{item.descrição}</p>

      <S.Buttons>
        <a href={item.repository}>Repository</a>
        <a href={item.deploy}>Deploy</a>
      </S.Buttons>
      </S.Card>
    ))}
      </Carousel>

      </S.Section>
    </S.Projetos>
  )
}
