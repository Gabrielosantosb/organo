import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required = {props.required} value={props.value}>
                <option value = ""/>
                {props.itens.map(item => {
                    return <option>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa