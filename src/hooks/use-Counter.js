import { useState, useEffect } from "react";

function useCouter (initialCounter){

    const [Count, setCount] = useState(initialCounter)

    useEffect(()=>{
        console.log(Count)
    },[Count]);

    const Increment = () =>{

        setCount( Count + 1);
    }

    return {
        Count,
        Increment
    }

};

export default useCouter;