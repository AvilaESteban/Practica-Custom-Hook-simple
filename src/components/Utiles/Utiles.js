import IMG1 from '../../asset/img/lapicera.jpg';
import IMG2 from '../../asset/img/lapiceras2.jpg';
import IMG3 from '../../asset/img/lapiceras3.jpg';
import useCounter from '../../hooks/useCounter';

const Utiles = () => {
//  const {counter, handleIncrease, handleDecrement, handleReset} =  useCounter();
 const counterA = useCounter();
 const counterB = useCounter();
 const counterC = useCounter(3);

   return (
      <div className='container mb-3'>
             <h3 className='text-center my-4'>Utiles Escolares</h3>
            <div className='row' >
                <div className='col-md-4 col-sm-12'> 
                  <img src={IMG1} alt='lapiceras' />
                <h6 className='my-2'>Elegir cantidad a comprar:</h6> 
                <div className='row '>
                  <div className='col-md-6 col-sm-12'>
                     <button onClick={counterA.handleIncrease} >+</button>
                     <button onClick={counterA.handleDecrement} className='my-2'>-</button>
                     <button onClick={counterA.handleReset} >0</button>
                  </div>
                     <div className='col-md-4 col-sm-12'>
                       <h2 className='display-1' > {counterA.counter}  </h2> 
                     </div> 
                </div>
            </div>
                 <div className='col-md-4 col-sm-12'> 
                   <img src={IMG2} alt='lapiceras' />
                   <h6 className='my-2'>Elegir cantidad a comprar:</h6> 
                <div className='row '>
                  <div className='col-md-6 col-sm-12'>
                  <button onClick={counterB.handleIncrease} >+</button>
                     <button onClick={counterB.handleDecrement} className='my-2'>-</button>
                     <button onClick={counterB.handleReset} >0</button>
                  </div>
                     <div className='col-md-4 col-sm-12'>
                       <h2 className='display-1' > {counterB.counter}  </h2> 
                     </div> 
                </div>
                </div>
                 <div className='col-md-4 col-sm-12'> 
                   <img src={IMG3} alt='lapiceras' />
                   <h6 className='my-2'>Cantidad minima a comprar:</h6> 
                <div className='row '>
                  <div className='col-md-6 col-sm-12'>
                  <button onClick={counterC.handleIncrease} >+</button>
                     <button onClick={counterC.handleDecrement} className='my-2'>-</button>
                     <button onClick={counterC.handleReset} >0</button>
                  </div>
                     <div className='col-md-4 col-sm-12'>
                       <h2 className='display-1' > {counterC.counter}  </h2> 
                     </div> 
                </div>
                </div>
            </div>
      </div>
  )
}

export default Utiles;