import { useState } from "react"

export default function Count (){

    const [count , setCount] = useState(0);

    const HandleAdd = () => {
        const add = count + 1;
        setCount(add);
    }

    const countStyle = {
        border: "2px solid tomato"
    }
    return(
        <div style={countStyle}>
            <h1>Count : {count}</h1>
            <button onClick={HandleAdd}>Add</button>
        </div>
    )
}