import Button from "../components/Button"
import useCouter from "../hooks/use-Counter"


function CounterPage({initialCounter}){

    const {Increment, Count} = useCouter(initialCounter);

    return (
        <div>
            <h1>Count is {Count}</h1>
            <Button  onClick={Increment}>Increment</Button>
        </div>
    )
}

export default CounterPage;