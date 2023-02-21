import Employee from '../Employee'
import './Time.css'

const Time = (props) => {
    
    let list = []
    let setList = []
    const removeEmplooye = (emplooye) => {
      setList([...list, emplooye])
    }
  
  

    function removeCard (cardRemove){
        let tmp = props.colaboradores.filter(
            emplooye => emplooye.nome !== cardRemove && 
            emplooye.cargo !== cardRemove)
            setList(tmp)
            
            
    }
    const css = { backgroundColor: props.color }
    
    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
               {props.colaboradores.map( colaborador => <Employee nome = {colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} remove = {removeCard}/> )}
               
            </div>
        </section> 
    
    )
}

export default Time