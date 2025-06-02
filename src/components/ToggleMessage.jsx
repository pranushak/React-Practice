import { useState } from "react";


const ToggleMessage = () => {

    const [isVisible, setIsVisible] = useState(false)

   const message = () =>{
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={message}>{isVisible ? 'Hide' : 'Show'}</button>

            {isVisible && <p>Hello, This is a toggle message</p>}
        </div>
    );
}

export default ToggleMessage;