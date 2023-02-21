import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form/Form';
import Time from './componentes/Time';

function App() {
  



  const groups = [
    {
      nome: 'Garçom',
      corPrimaria: '#57C278',
      color: '#D9F7E9'
    },
    {
      nome: 'Cozinha',
      corPrimaria: '#82CFFA',
      color: '#E8F8FF'
    },
    {
      nome: 'Limpeza',
      corPrimaria: '#A6D157',
      color: '#F0F8E2'
    },
    {
      nome: 'Gerência',
      corPrimaria: '#E06B69',
      color: '#FDE7E8'
    },
    {
      nome: 'Recepção',
      corPrimaria: '#DB6EBF',
      color: '#FAE9F5'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])
  const addEmployee = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  

  return (
    <div className="App">
      <Banner />
      <Form groups={groups.map(time => time.nome)} newEmployee = {colaborador => addEmployee(colaborador)}/>
      
      {groups.map(time => <Time    
        nome={time.nome} 
        color={time.color} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
  
    </div>
  );
}

export default App;
