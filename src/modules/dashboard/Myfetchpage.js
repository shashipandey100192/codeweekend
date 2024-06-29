import React, { useEffect, useState,Fragment } from 'react'

function Myfetchpage() {
  const [x,y]=useState([]);

  const myfetch = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((d)=>{
            return d.json();  
        }).then((d)=>{
            console.log(d);
            y(d);
        });
  }

  useEffect(()=>{
    myfetch();
},[])
  
return (
    <Fragment>
    <h1>use of fetch api</h1>
    <table class="table table-bordered border-primary">
        <thead>
            <tr>
                <th scope="col">s.no</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">name</th>
            </tr>
        </thead>
        <tbody>
            {x.map((d)=>{
                return(
                    <tr>
                <th scope="row">{d.id}</th>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.name}</td>
                
            </tr>
                )
            })}
            
        </tbody>
    </table>
    </Fragment>
)
}

export default Myfetchpage