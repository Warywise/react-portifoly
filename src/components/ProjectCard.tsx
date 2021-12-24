interface CardInfos {
  props: {
    image: string,
    title: string,
    description: string,
    url: string,
  }
}

export default function ProjectCard(props: CardInfos) {
  return (
    <div className='project-card'>
      <div>
        <img src={props.props.image} alt={`visual do projeto ${props.props.title}`} />
      </div>
      <h3>{ props.props.title }</h3>
      <p>{ props.props.description }</p>
      <a href={props.props.url} target='_blank' rel='noreferrer'>
        <h4>Ir à pagina</h4>
      </a>
    </div>
  )
}
