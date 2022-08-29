import { useState } from 'react'

const useMyHook = (inicialState=false) => {
    
        const [active, setActive] = useState(inicialState);

        const handleToggle = () => setActive(!active);
        const handleTrue = () => setActive(true);
        const handleFalse = () => setActive(false);

        return{
            active,
            handleToggle,
            handleTrue,
            handleFalse
        }
 
}

export default useMyHook