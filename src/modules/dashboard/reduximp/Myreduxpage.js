import React from 'react'
import { increment,decrement } from './Myactions';
import { useSelector,useDispatch } from 'react-redux';

function Myreduxpage() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Increment</button>
        <span className='h1 p-3'>{count}</span>
        <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>decrement</button>
      </div>
    </div>
  )
}

export default Myreduxpage