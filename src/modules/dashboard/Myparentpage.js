import React, { Fragment } from 'react'
import Mychildpage from './Mychildpage'

const studeent=[
    {name:"ravi",course:"mern"},
    {name:"kumar",course:"mean"},
    {name:"singh",course:"java"},
    {name:"pankaj",course:"phy"},
    {name:"rohit",course:"php"},
];
const age = 80;

function Myparentpage() {
  return (
    <Fragment>
        <div className='border'>
            <h1>age:{age}</h1>
            <h1>This is parent Elements</h1>

        <Mychildpage myage={age} datalist={studeent}></Mychildpage>
        </div>
    </Fragment>
  )
}

export default Myparentpage