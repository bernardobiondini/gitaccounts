import './style.css'

export function Card(props) {
  return (
    <div className="user-card">
      <div className='image-card'>
        <img src={props.avatar} alt="Foto de Perfil" title='Foto de Perfil' />
      </div>
      
      <p title='Nome do usuário' >{props.name}</p>
      <p title='Número de projetos públicos' className='projects' >{props.projects}</p>
    </div>
  )
}