import { useEffect, useState } from 'react';

import axios from 'axios';

import {Card} from './components/Card/index'

import './style.css'

function App() {

  const [ userName, setUserName ] = useState("");
  const [ users, setUsers ] = useState([]);

  async function handleAddUser(event) {
    event.preventDefault();

    const url = `https://api.github.com/users/${userName}`

    const result = await axios.get(url);

    if(!result) {

    }

    const user = {
      id: result.data.id,
      name: result.data.name,
      avatar: result.data.avatar_url,
      projectsNumber: result.data.public_repos
    }
    
    setUsers(prevUsers => [...prevUsers, user]);

    document.getElementById("gitForm").reset();

    setUserName("Adiconado");

    setTimeout( () => setUserName(""));
  }

  useEffect( () => {
    users.sort( (a, b) => a.projectsNumber > b.projectsNumber ? -1 : 1 );
  },[users, setUsers, userName] )

  return (
    <main>

      
      <form id="gitForm" onSubmit={handleAddUser}>
        <label htmlFor="userInput">Usuário:</label>
        <input form="gitForm" type="text" name="userInput" id="userInput" placeholder="Digite o seu usuário do github" onChange={event => {setUserName(event.target.value)}} />
        <button form="gitForm" type="submit">Adiconar</button>
      </form>


      <section className='cards-container'>
        <h3>Usuários adicionados <span>quem tiver mais repositórios fica amarelo</span></h3>
        {users.map(user => (
          <Card 
            key={user.id}
            name={user.name}
            projects={user.projectsNumber}
            avatar={user.avatar}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
