import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, incrementByAmount} from '../../redux/features/counterSlice'

export const ReduxComponent = (props) => {
    const dispatch = useDispatch();
    const {value} = useSelector(s => s.counter)
    return (
        <div style={{backgroundColor: 'white', padding: '1rem'}}>
            ReduxComponent {value}
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    )
}