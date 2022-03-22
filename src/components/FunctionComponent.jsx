import React from "react";
import './FunctionComponent.css'

export const FunctionComponent = (props) => {
    const [contador, setContador] = React.useState(0);

    const buttonStyle = {
        color: 'white',
        fontWeight: 'bold', // font-weight
        fontSize: '24px'
    }

    const execute = () => setContador(contador + 1);

    return (
        <button onClick={execute} className="button-function" style={buttonStyle}>
            contador {contador}
        </button>
    )
}