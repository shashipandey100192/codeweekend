import React from 'react'
import { Link } from 'react-router-dom'

function Mylogin() {
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-5'>
                    <div className='container-fluid border p-5 mt-5 shadow rounded bg-light'>
                        <div className='row'>
                            <div className='col-12 text-center '>
                                <h2>Login Page</h2>
                            </div>
                            <div className='col-12 mt-3'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                    {/* <div id="emailHelp" class="form-text">required email</div> */}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                    {/* <div id="emailHelp" class="form-text">required email</div> */}
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                {/* <input type='button' value="submit" className='btn btn-success'/> */}
                                <Link to="dashboard" className='btn btn-success'>submit</Link>
                                <input type='reset' value="cancle" className='btn btn-danger ms-3'/>
                                <Link to="registor">New User Registor</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mylogin