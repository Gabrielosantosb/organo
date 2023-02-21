import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const toSave = (event) => {
        event.preventDefault()
        props.newEmployee({

            nome,
            cargo,
            imagem,
            time
            })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')       
        
    }

    return (
        <section className="formulario">
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do funcionário</h2>
                <TextField 
                    required={true}
                    label = "Nome"
                    placeholder="Digite seu nome" 
                    value={nome}
                    aoAlterado   = {newValue => setNome(newValue)}
                />
                <TextField
                    required = {true}
                    label = "Cargo"
                    placeholder = "Digite seu cargo" 
                    value = {cargo}
                    aoAlterado  = {newValue => setCargo(newValue)}
                />
                <TextField
                    label="Imagem"
                    placeholder="https://github.com/usuario.png" 
                    value={imagem}
                    aoAlterado = {newValue => setImagem(newValue)}
                />
                <ListaSuspensa
                    required ={true}
                    label="Time" 
                    itens={props.groups}
                    value={time}
                    aoAlterado = {newValue => setTime(newValue)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form