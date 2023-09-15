import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0)

    function handleAdd (){
        let newCount = count + 1
        setCount(newCount)
    }

    function handleReduce(){
        let newCount = count-1;
        setCount(newCount)
    }


    return (
        <div>
            <h3>Counter : {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}