import React, { useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Detailspage() {

    const {id}=useParams()

const [single,setsingle]=useState({})

const viewDetails = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((d) => {
        console.log(d.data);
        setsingle(d.data);
    })
}

useEffect(() => {
    viewDetails();
}, [])




  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <Link to="/dashboard/myaxios" className='btn btn-info'>Back</Link>
                <h1>Details page</h1>
                <h1>id {single.id}</h1>
              <h3>{single.userId}</h3>
              <h4>{single.title}</h4>
              <p>{single.body}</p>
            </div>
        </div>
    </div>


  )
}

export default Detailspage