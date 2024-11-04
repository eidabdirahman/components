import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from '../components/Panel';



const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const Change_Value = 'change-value-to-add';
const Add_Value_To_Count = 'Add_Value_To_Count'
function reducer (state, action){
    switch (action.type) {
        case INCREMENT:
            state.count = state.count + 1;
            return state;
    
        case DECREMENT:
            state.count = state.count - 1;
            return;
    
        case Change_Value:
            state.valueToAdd = action.payload;
            return;
    
        case Add_Value_To_Count:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
    
        default:
            return;
    }
    
    
    
}

function CounterPage({ initialCounter }) {
    // const [count, setCount] = useState(initialCounter);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer) , {
        count : initialCounter,
        valueToAdd: 0

    });
    console.log(state)

    const increment = () => {
        dispatch({
            type: INCREMENT
        })
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT
        })
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
       dispatch({
        type: Change_Value,
        payload: value
       })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: Add_Value_To_Count
        })
    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    type="number"
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;