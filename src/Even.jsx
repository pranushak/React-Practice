
import { useState } from 'react'

const Even = () => {
    const [count, setCount] = useState(0);

    const isEven = count% 2 === 0;

    return (
        <div>
            <h1>My Application</h1>
            <h2>Count : {count}</h2>
            <p>This Number is <strong> {isEven ? 'EVEN' : 'ODD'}</strong></p>
            <button onClick={()=> setCount(count + 1)}> Increment </button>
            <button onClick={() => setCount(count - 1)} disabled={count == 0}> Decrement </button>

        </div>
    )
}

export default Even;