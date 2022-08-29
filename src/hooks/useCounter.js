import { useState } from 'react';

const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const handleIncrease = () => setCounter(counter + 1);
    const handleDecrement = () => setCounter(counter - 1);
    const handleReset = () => setCounter(0);
    

  return{
    counter,
    handleIncrease,
    handleDecrement,
    handleReset
  }
}

export default useCounter