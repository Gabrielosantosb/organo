import './TextField.css'

const TextField = (props) => {


    const toWrited = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={toWrited} required = {props.required} placeholder = {props.placeholder}/>
        </div>
    )
}

export default TextField