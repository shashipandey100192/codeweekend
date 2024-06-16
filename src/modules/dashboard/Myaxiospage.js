import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Myaxiospage() {
    const [a, y] = useState([])

    const myapifunc = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
            console.log(d.data);
            y(d.data);
        })
    }

    useEffect(() => {
        myapifunc();
    }, [])


    return (
        <Fragment>
        <h1>use of Axios api</h1>
        <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">s.no</th>
                    <th scope="col">id</th>
                    <th scope="col">userid</th>
                    <th scope="col">text</th>
                    <th scope="col" width="200">actions</th>
                </tr>
            </thead>
            <tbody>
                {a.map((d)=>{
                    return(
                        <tr>
                    <th scope="row">{d.id}</th>
                    <td>{d.userId}</td>
                    <td>{d.title}</td>
                    <td>{d.body}</td>
                    <td align='right'>
                        <Link to="#" className="btn btn-primary btn-sm">view</Link>
                        <Link to="#" className="btn btn-warning btn-sm ms-2">edit</Link>
                        <Link to="#" className="btn btn-danger btn-sm ms-2" >del</Link>
                    </td>
                </tr>
                    )
                })}
                
            </tbody>
        </table>
        </Fragment>

    )
}

export default Myaxiospage