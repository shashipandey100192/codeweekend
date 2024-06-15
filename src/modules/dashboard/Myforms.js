import React, { useState } from 'react'
import Myhomepage from './Myhomepage';

function Myforms() {

    const [sv, sf] = useState("ooooooo");
    const [a, b] = useState("ooooooo");

    const mychange = () => {
        sf(800);
        b(prompt("enter data"));
    }

    const mychangeinput = (ele) => {
        b(ele.target.value);
        console.log(ele);
    }

    const [n, sn] = useState(0);
    let changenumber = (e) => {
        sn(e.target.value)
    }


const [gm, sm]=useState();
    const mychangedrop =(e)=>{
        sm(e.target.value)

    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1> Myforms</h1>
                    <h2>{sv}</h2>
                    <input type='button' value="change sfunc" onClick={mychange} />
                    <h4>{a}</h4>
                    <input type='text' value={a} onInput={mychangeinput} /><br />
                    number <input type='number' min="10" max="100" onInput={changenumber} />
                    {/* <h1>{n >=80 ? 'success' : 'pending'}</h1> */}

                    {/* <h1>{n >=80 ? 'success' : n >= 40 ? 'pending' : 'unreached'}</h1> */}
                    <h1 className={n >= 80 ? 'bg-success' : 'bg-danger'}> {n}</h1>

                </div>
            </div>

            <div className='row'>
                <div className='col-12 border p-3'>
                    <select onChange={mychangedrop}>
                        <option>jan</option>
                        <option>feb</option>
                        <option>mar</option>
                        <option>apr</option>
                    </select>
                    <h2>sjkdhfjksdf</h2>
                    {gm =='jan' ? <Myhomepage/> : ''}
                </div>
            </div>

        </div>
    )
}

export default Myforms