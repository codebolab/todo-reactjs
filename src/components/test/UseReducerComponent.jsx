import { useReducer } from "react";

const initialState = {count: 0};
 
function reducer(state, action) {
    switch (action.type) {
        case KEYS.INCREMENTS:
            return {count: state.count + 1};
        case KEYS.DECREMENTS:
            return {count: state.count - 1};
        case KEYS.INCREMENT_BY_VALUE:
            return {count: state.count + action.value};
        default:
            throw new Error();
    }
}

export const UseReducerComponent = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <div style={{backgroundColor: 'white'}}>
        Count: {state.count}
     <button onClick={() => dispatch({type: KEYS.DECREMENTS})}>-</button>
     <button onClick={() => dispatch({type: KEYS.INCREMENTS})}>+</button>    
     <button onClick={() => dispatch({type: KEYS.INCREMENT_BY_VALUE, value: 5})}>+5</button>  
    </div>
}

export const KEYS = {
    INCREMENTS: 'INCREMENTS',
    DECREMENTS: 'DECREMENTS',
    INCREMENT_BY_VALUE: 'INCREMENT_BY_VALUE'
}