import React from 'react'

interface CardInfos {
  image: string;
  title: string;
  description: string;
  url: string;
}

export default function ProjectCard(props: CardInfos) {
  return (
    <div className='project-card'>
      <img src={ props.image } alt={ `visual do projeto ${props.title}` } />
      <h4>{ props.title }</h4>
      <p>{ props.description }</p>
      <a href={ props.url } target='_blank' rel='noreferrer'>Ir à pagina</a>
    </div>
  )
}
