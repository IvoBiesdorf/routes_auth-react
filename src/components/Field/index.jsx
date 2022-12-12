import './styles.css'


export const Field = (props) => {
    const style = {
        width: props.width,
        borderBottom: '0.5px solid #DDD'
    }
    return(
        <div style={style} className= {props.bg === true ? 'field bg-gray': 'field'}>
            <p className="uderdata"><b>{props.field_name}:</b> {props.children}</p>
        </div>
    )
}