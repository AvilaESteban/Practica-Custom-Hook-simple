import useMyHook from '../../hooks/useMyHook'

const Button = () => {

    const {active, handleToggle, handleTrue, handleFalse} = useMyHook()

  return (
    <>
     <h1 className='py-4'>Custom Hooks</h1>
      <button onClick={handleToggle}>Toggle</button>
        <br></br>
        <button className='my-2' onClick={handleTrue}>True</button>
        <br></br>
        <button onClick={handleFalse}>False</button>
        <br></br>
         <h1>
              { active.toString()}
         </h1>
    </>
  )
}

export default Button