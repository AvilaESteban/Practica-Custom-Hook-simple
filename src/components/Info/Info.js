import React from 'react'
import useMyHook from '../../hooks/useMyHook';

const Info = () => {

const { active, handleToggle,handleTrue,handleFalse} = useMyHook(false);

  return (
    <>
    <button className='mb-3' onClick={handleToggle} >
        toggle
    </button>
      <button className='mx-2 mb-3' onClick={handleTrue}>
        Mostrar Info
      </button>
       <button className='mb-3' onClick={handleFalse}>
        Ocultar Info
       </button>
       { active && (<h1> User Info </h1>)}
    </>
  )
}

export default Info;