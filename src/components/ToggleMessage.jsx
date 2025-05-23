import { useState } from "react";


const ToggleMessage = () => {

    const [isVisible, setIsVisible] = useState(false)

   const toggleMessage = () =>{
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={toggleMessage}>{isVisible ? 'Hide' : 'Show'}</button>

            {isVisible && <p>Hello, This is a toggle message</p>}
        </div>
    );
}

export default ToggleMessage;