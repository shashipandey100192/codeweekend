import React from 'react'

function Mychildpage(props) {
  return (
    <div className='container border shadow bg-orange p-3'>Mychildpage {props.myage}
        <select>
            {props.datalist.map((d)=>{
                return <option>{d.name}</option>
            })}
        </select>
    </div>
  )
}

export default Mychildpage