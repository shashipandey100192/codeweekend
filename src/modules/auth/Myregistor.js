import React from 'react'
import { Link } from 'react-router-dom'

function Myregistor() {
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-8'>
                    <div className='container-fluid border p-5 mt-5 shadow rounded bg-light'>
                        <div className='row'>
                            <div className='col-12 text-center '>
                                <h2>User Registor Page</h2>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">FullName</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email Id</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Select Course</label>
                                    <select className='form-control'>
                                        <option>Mern</option>
                                        <option>Mean</option>
                                        <option>Java</option>
                                        <option>Excel</option>
                                        <option>Web</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="mail" />
                                        <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="female" />
                                        <label class="form-check-label" >Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Type Comments</label>
                                    <div class="form-floating">
                                        <textarea class="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <input type='button' value="Registor Now" className='btn btn-success shadow' />
                                <input type='reset' value="cancle" className='btn btn-danger ms-3 shadow' />
                                <Link to="/">Login Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myregistor