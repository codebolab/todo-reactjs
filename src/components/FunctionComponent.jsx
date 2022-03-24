import React, { useEffect } from "react";
import './FunctionComponent.css'

export const FunctionComponent = ({contadorInicial=0, large, children, icon}) => {
    const [contador, setContador] = React.useState(contadorInicial);

    const buttonStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        width: large ? '250px' : '150px'
    }

    const execute = () => setContador(contador + 1);

    if(!children){
        return <div>no hay nada que mostrar</div>
    }

    return (
        <button onClick={() => execute()} className="button-function" style={buttonStyle}>
            {icon && <i>&#174;</i>} {children} {contador}
            {icon ? <i>&#174;</i> : 'no hay icon'}
            
        </button>
    )
}