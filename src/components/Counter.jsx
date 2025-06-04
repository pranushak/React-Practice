import { useEffect } from "react"

const Counter = () => {
    useEffect(() => {console.log("component rendered!");},
        []);

    return <h1>Hello</h1>
}

export default Counter;
